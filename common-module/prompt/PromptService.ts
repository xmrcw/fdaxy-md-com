import {ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector, OnDestroy, Type} from '@angular/core';
import {PromptContainerComponent} from './prompt-container/prompt-container.component';
import {Overlay} from '@angular/cdk/overlay';
import {FyMessageDataFilled, FyMessageDataOptions} from './prompt.definitions';

@Injectable({
  providedIn: 'root'
})
export class PromptService implements OnDestroy {

  private _container: PromptContainerComponent;

  constructor(
    private overlay: Overlay,
    private injector: Injector,
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef) {

    if (!this._container) {
      this._container = this.createContainer();
    }
  }

  success(title: string, context: string, option?: FyMessageDataOptions) {
    // 73cf45
    this._container.push('success', title, context, option);
  }
  error(title: string, context: string, option?: FyMessageDataOptions) {
   // f5222d
    this._container.push('error', title, context, option);
  }
  info(title: string, context: string, option?: FyMessageDataOptions) {
    // #2998ff
    this._container.push('info', title, context, option);
  }
  warning(title: string, context: string, option?: FyMessageDataOptions) {
    // faad14
    this._container.push('warning', title, context, option);
  }


  private createContainer(): PromptContainerComponent {
    const factory = this.cfr.resolveComponentFactory(PromptContainerComponent);
    const componentRef = factory.create(this.injector); // Use root injector
    componentRef.changeDetectorRef.detectChanges(); // Immediately change detection to avoid multi-checking error
    this.appRef.attachView(componentRef.hostView); // Load view into app root
    const overlayPane = this.overlay.create().overlayElement;
    overlayPane.style.zIndex = '1010'; // Patching: assign the same zIndex of ant-message to it's parent overlay panel, to the ant-message's zindex work.
    overlayPane.appendChild((componentRef.hostView as EmbeddedViewRef<{}>).rootNodes[ 0 ] as HTMLElement);
    return componentRef.instance;
  }

  ngOnDestroy(): void {
    if (this._container) {

    }
  }
}
