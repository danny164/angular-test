import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BannerComponent } from './pages/home/components/banner/banner.component';
import { TopCategoriesComponent } from './pages/home/components/top-categories/top-categories.component';
import { ProductsComponent } from './pages/home/components/products/products.component';
import { BranchLogosComponent } from './pages/home/components/branch-logos/branch-logos.component';
import { NewsletterComponent } from './pages/home/components/newsletter/newsletter.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NavigationComponent } from './shared/components/footer/navigation/navigation.component';
import { SocialContactComponent } from './shared/components/footer/social-contact/social-contact.component';
import { CopyrightComponent } from './shared/components/footer/copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    TopCategoriesComponent,
    ProductsComponent,
    BranchLogosComponent,
    NewsletterComponent,
    NavigationComponent,
    SocialContactComponent,
    CopyrightComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
