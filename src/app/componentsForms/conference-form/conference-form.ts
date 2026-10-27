import { Component, effect, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConferenceService } from '../../services/conference-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-form',
  imports: [ReactiveFormsModule],
  templateUrl: './conference-form.html',
  styleUrl: './conference-form.css',
})
export class ConferenceForm implements OnInit {
  // Injection des services
  private conferenceServ = inject(ConferenceService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  // Variable pour savoir si on est en mode UPDATE ou ADD
  isUpdateMode = false;
  conferenceId: number = 0;

  // Formulaire avec FormBuilder (méthode recommandée)
  myForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', Validators.required],
    place: [''],
    nbmax: [''],
    date: [''],
  });

  // Convertir les changements du formulaire en signal
  myFormValue = toSignal(this.myForm.valueChanges, { initialValue: this.myForm.value });

  // Convertir le statut du formulaire en signal
  isValid = toSignal(this.myForm.statusChanges, { initialValue: 'INVALID' });

  constructor() {
    // Effect pour suivre les changements du formulaire
    effect(() => {
      console.log('Valeurs du formulaire:', this.myFormValue());
      console.log('Statut du formulaire:', this.isValid());
    });
  }

  ngOnInit() {
    // Récupérer l'ID depuis l'URL (si présent)
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      // Mode UPDATE : charger la conférence existante
      this.isUpdateMode = true;
      this.conferenceId = Number(id);
      this.loadConference(this.conferenceId);
    }
  }

  // Charger les données d'une conférence pour la modifier
  loadConference(id: number) {
    this.conferenceServ.getConferenceById(id).subscribe({
      next: (conference) => {
        console.log('Conférence chargée:', conference);
        // Remplir le formulaire avec les données existantes
        this.myForm.patchValue({
          title: conference.title,
          description: conference.description,
          place: conference.place,
          nbmax: conference.maxParticipants,
          date: conference.date
        });
      },
      error: (err) => {
        console.error('Erreur lors du chargement de la conférence:', err);
      }
    });
  }

  onSubmit() {
    console.log('Soumission du formulaire:', this.myForm.value);

    // Créer l'objet Conference à partir des valeurs du formulaire
    const conf: Conference = {
      id: this.isUpdateMode ? this.conferenceId : 0,
      title: this.myForm.value.title ?? '',
      description: this.myForm.value.description ?? '',
      date: this.myForm.value.date ?? '',
      place: this.myForm.value.place ?? '',
      maxParticipants: Number(this.myForm.value.nbmax) || 0,
      nbParticipants: 0
    };

    if (this.isUpdateMode) {
      // Mode UPDATE : modifier la conférence existante
      this.conferenceServ.updateConference(this.conferenceId, conf).subscribe({
        next: (response) => {
          console.log('Succès, conférence modifiée:', response);
        },
        error: (err) => {
          console.error('Erreur lors de la modification:', err);
        },
        complete: () => {
          console.log('Requête HTTP terminée');
          this.router.navigate(['/conferences']);
        }
      });
    } else {
      // Mode ADD : ajouter une nouvelle conférence
      this.conferenceServ.addConference(conf).subscribe({
        next: (response) => {
          console.log('Succès, conférence enregistrée:', response);
        },
        error: (err) => {
          console.error('Erreur lors de la requête:', err);
        },
        complete: () => {
          console.log('Requête HTTP terminée');
          this.router.navigate(['/conferences']);
        }
      });
    }
  }
}
