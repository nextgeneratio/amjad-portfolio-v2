'use client';
import { useEffect } from 'react';
import { themeStore } from '@/lib/theme-store';

/** Dev-only: connect Reticle + install the React adapter, after hydration. */
export function ReticleDev() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;
    void Promise.all([import('@reticlehq/react'), import('@reticlehq/browser')]).then(
      ([{ reticle, install, registerCapabilities }, { registerStore }]) => {
        install();
        // Both provided by withReticle() in next.config. The bridge rejects a connect with no token;
        // the root makes source paths repo-relative instead of absolute.
        const token = process.env.NEXT_PUBLIC_RETICLE_TOKEN;
        const root = process.env.NEXT_PUBLIC_RETICLE_ROOT;
        // withReticle() finds the daemon serving this project on every dev-server start. It wins over
        // any port written into this file at install time, so moving the daemon needs no edit here.
        const url = process.env.NEXT_PUBLIC_RETICLE_URL;
        // So a version-skewed pair names the SDK's version instead of "an unknown older wire".
        const sdkVersion = process.env.NEXT_PUBLIC_RETICLE_SDK_VERSION;
        registerStore('theme', themeStore);

        // ── Start with ONE flow. ────────────────────────────────────────────────────────────────
        // Registering a store is the highest-value line here: it lets the agent check what the app
        // BELIEVES, not just what it rendered. Pass the STORE, not `() => store.getState()` — the
        // store form wires `subscribe` too, so every mutation emits a diff; the getter form is
        // read-only.
        registerCapabilities({
          testids: [
            'theme-toggle',
            'mobile-menu-toggle',
            'mobile-navigation',
            'nav-home',
            'nav-about',
            'nav-skills',
            'nav-projects',
            'nav-experience',
            'nav-contact',
            'contact-me',
            'project-card-expense-dss',
            'project-card-rathna-stores',
            'project-card-student-management-database',
            'project-card-nextjs-ai-agent-demo',
            'project-card-cleanbrowsing-guard',
            'project-card-csharp-login-form',
            'project-details-expense-dss',
            'project-details-rathna-stores',
            'project-details-student-management-database',
            'project-details-nextjs-ai-agent-demo',
            'project-details-back',
            'project-repository',
            'project-demo',
            'store-product-butter-cake',
            'store-product-chocolate-cake',
            'store-product-ribbon-cake',
            'store-add-to-cart-butter-cake',
            'store-add-to-cart-chocolate-cake',
            'store-add-to-cart-ribbon-cake',
            'store-proceed-checkout',
            'store-checkout-form',
            'store-checkout-name',
            'store-checkout-email',
            'store-checkout-address',
            'store-place-demo-order',
            'store-order-confirmation',
            'contact-name',
            'contact-email',
            'contact-subject',
            'contact-message',
            'contact-submit',
          ],
          signals: [
            'rathna:cart-updated',
            'rathna:checkout-opened',
            'rathna:demo-order-placed',
            'rathna:continue-shopping',
          ],
          stores: ['theme', 'navigation', 'contact-form', 'rathna-store'],
        });
        reticle.connect({
          projectId: 'amjad-portfolio-0c8d6b8a', ...(url ? { url } : {}),
          ...(token ? { token } : {}),
          ...(root ? { root } : {}),
          ...(sdkVersion ? { sdkVersion } : {}),
        });
      },
    );
  }, []);
  return null;
}
