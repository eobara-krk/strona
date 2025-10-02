import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Link {
  title: string;
  link: string;
}

interface Event {
  title: string;
  date: Date;
  emoji: string;
  description?: string; // opis wydarzenia
  show?: boolean;       // czy rozwinięte
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AppComponent {
  today = new Date();

  links: Link[] = [
    { title: 'Strona wspólnoty Źródło Łaski', link: 'https://zrodlolaski.pl' },
    { title: 'Facebook', link: 'https://www.facebook.com/ZrodloLaski/?locale=pl_PL' },
    { title: 'Kronika spotkań', link: 'https://kronika.netlify.app/' },
    { title: 'Pomocnicze pliki', link: 'https://pomocne.netlify.app/' }
  ];

  events: Event[] = [
  { 
    title: '3-5.10.2025 r. WARSZTATY MIŁOŚĆ JEST NAJWAŻNIEJSZA', 
    date: new Date('2025-10-05'), 
    emoji: '📌', 
    show: false,
  description: `<b>Miejsce:</b> Dom Rekolekcyjny "Jutrzenka" Zgromadzenie Sióstr Maryi Niepokalanej w Bardzie Śląskim, ul. 1 Maja 12, 57-256 Bardo<br>
                    <b>Kiedy:</b> <br><b>Start:</b> PIĄTEK - 17.00<br>
- 18.00: zakwaterowanie<br>
- 18.00: kolacja<br>
- 19.15: Msza św. (kaplica w Domu Rekolekcyjnym)<br>
<b>Zakończenie:</b> NIEDZIELA - ok. 13.30 obiadem<br>
Z uwagi na charakter warsztatowy wydarzenia wymagany jest udział w 3 dniach rekolekcji (od piątku do niedzieli). Szczegółowy program warsztatów zostanie podany na miejscu uczestnikom.<br><br>
<b>Opis warsztatów:</b><br>
Weekendowe rekolekcje formacyjne dla Liderów, Animatorów i Odpowiedzialnych Wspólnot, które poprowadzi:<br>
➡️ Ks. dr hab. Rajmund Pietkiewicz - prof. PWT.<br><br>

👉 <b>ZAPISY PRZEZ FORMULARZ:</b> <a href="https://forms.gle/bTXn6W6JuRhc8cQKA" target="_blank">kliknij tutaj</a>
`
  },
    { 
      title: '27.10.2025 r. Spotkanie - Szkoła Uwielbienia', 
      date: new Date('2025-10-28'), 
      emoji: '📌', 
      show: false,
      description: `<b>Miejsce:</b> Dom Parafialny przy ul. Monte Cassino 68 we Wrocławiu<br>
                    <b>Godzina:</b> 19:00<br>
                    <b>Opis:</b> ➡️ Ks. dr hab. Rajmund Pietkiewicz - prof. PWT. poprowadzi nas w modlitwę uwielbienia poddanego Duchowi Św. Spotkanie ma charakter otwarty i może wziąć w nim udział każdy, kto pragnie pogłębić swoją relację z Bogiem poprzez modlitwę uwielbienia.` 
    }
  ];

  get upcomingEvents() {
    return this.events.filter(e => e.date >= this.today);
  }

  toggle(event: Event) {
    event.show = !event.show;
  }
}
