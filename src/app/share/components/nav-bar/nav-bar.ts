import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeSwitcher } from "../Theme-Switcher/Theme-Switcher";

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, ThemeSwitcher, RouterLinkActive],
  templateUrl: './nav-bar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBar { }
