import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./share/components/nav-bar/nav-bar";
import { Footer } from "./share/components/Footer/Footer";
import { BackToTop } from "./share/components/BackToTop/BackToTop";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Footer, BackToTop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto-03');
}

