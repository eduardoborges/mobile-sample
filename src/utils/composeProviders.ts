import React from 'react';

export function composeProviders(...providers: any[]) {
  return function ProviderComposer({ children }: any) {
    return providers.reduceRight((child, parent) => React.cloneElement(parent, {
      children: child,
    }), children);
  };
}
