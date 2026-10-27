import { Component, inject, signal } from '@angular/core';
import { Conference } from '../../models/conference';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { ConferenceDetails } from '../conf-details/conference-details';
import { ConferenceService } from '../../services/conference-service';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-conference-list',
  imports: [CommonModule, UpperCasePipe, DatePipe, ConferenceDetails, RouterLink, ReactiveFormsModule],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})


export class ConferenceList {
  conferenceSelectionnee: Conference | null = null;
  
  // Pour gérer le mode édition
  conferenceEnEdition: number | null = null; // ID de la conférence en cours d'édition
  editForm: FormGroup | null = null;
  
  private confs = inject(ConferenceService);
  private fb = inject(FormBuilder);
  
  today = new Date().toISOString().split('T')[0];
  
  // Signal pour la liste des conférences
  conferences = toSignal(this.confs.getAllConferences(), {initialValue: []});

  choisirConference(conference: Conference) {
    this.conferenceSelectionnee = conference;
  }
  
  couleurBouton(conference: Conference) {
    if (conference.maxParticipants - conference.nbParticipants > 20) {
      return 'vert';
    } else if (conference.maxParticipants - conference.nbParticipants < 5) {
      return 'rouge';
    } else {    
      return 'orange';
    }
  }
  
  reserve(conference: Conference) {}

  // Activer le mode édition pour une conférence
  activerEdition(conference: Conference, event: Event) {
    event.stopPropagation(); // Empêcher le clic sur la carte
    
    this.conferenceEnEdition = conference.id;
    
    // Créer le formulaire avec les valeurs de la conférence
    this.editForm = this.fb.group({
      title: [conference.title, [Validators.required, Validators.minLength(3)]],
      description: [conference.description, Validators.required],
      place: [conference.place],
      maxParticipants: [conference.maxParticipants],
      date: [conference.date]
    });
  }

  // Annuler l'édition
  annulerEdition() {
    this.conferenceEnEdition = null;
    this.editForm = null;
  }

  // Sauvegarder les modifications
  sauvegarderModification(conference: Conference) {
    if (!this.editForm || this.editForm.invalid) {
      return;
    }

    const confModifiee: Conference = {
      id: conference.id,
      title: this.editForm.value.title,
      description: this.editForm.value.description,
      date: this.editForm.value.date,
      place: this.editForm.value.place,
      maxParticipants: Number(this.editForm.value.maxParticipants),
      nbParticipants: conference.nbParticipants // Garder le même nombre de participants
    };

    // Envoyer la modification au service
    this.confs.updateConference(conference.id, confModifiee).subscribe({
      next: (response) => {
        console.log('Conférence modifiée avec succès:', response);
        // Rafraîchir la liste
        this.rafraichirListe();
        // Quitter le mode édition
        this.annulerEdition();
      },
      error: (err) => {
        console.error('Erreur lors de la modification:', err);
      }
    });
  }

  // Rafraîchir la liste des conférences
  rafraichirListe() {
    this.conferences = toSignal(this.confs.getAllConferences(), {initialValue: []});
  }

  // Vérifier si une conférence est en mode édition
  estEnEdition(conferenceId: number): boolean {
    return this.conferenceEnEdition === conferenceId;
  }
}
