import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OkraService {
  private widgetScriptUrl = 'https://cdn.okra.ng/v2/okra.min.js';
  private scriptLoadPromise: Promise<void> | null = null;

  constructor() { }

  private loadWidgetScript(): Promise<void> {
    if (this.scriptLoadPromise) {
      return this.scriptLoadPromise;
    }

    this.scriptLoadPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${this.widgetScriptUrl}"]`);
      if (existing) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = this.widgetScriptUrl;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Okra widget script'));
      document.head.appendChild(script);
    });

    return this.scriptLoadPromise;
  }

  async openWidget(options: any): Promise<void> {
    await this.loadWidgetScript();

    const okraGlobal: any = (window as any).Okra;
    if (!okraGlobal) {
      throw new Error('Okra global not available after script load');
    }

    if (typeof okraGlobal.buildWithOptions === 'function') {
      okraGlobal.buildWithOptions(options);
      return;
    }

    try {
      const instance = new okraGlobal(options);
      if (typeof instance.open === 'function') {
        instance.open();
        return;
      }
    } catch (_) {
      // fall through
    }

    throw new Error('Unsupported Okra widget initialization method');
  }
}
