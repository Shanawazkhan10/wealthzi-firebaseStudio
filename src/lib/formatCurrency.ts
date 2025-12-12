// Utility to format Indian Rupee (INR) values for app-wide use
export function formatCurrency(
  amount: number,
  options?: {
    maximumFractionDigits?: number;
    minimumFractionDigits?: number;
    style?: 'symbol' | 'code' | 'name';
    compact?: boolean;
    forcePlain?: boolean; // disables Cr/Lac compacting if true
    showCode?: boolean;
    spaceAfterSymbol?: boolean;
  }
): string {
  if (isNaN(amount) || !isFinite(amount)) return '₹0';
  const opts = {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    style: 'symbol',
    compact: false,
    forcePlain: false,
    showCode: false,
    spaceAfterSymbol: false,
    ...options,
  };
  // Large numbers in Indian finance are usually shown as Lakh or Crore
  if (!opts.forcePlain) {
    if (Math.abs(amount) >= 1e7) {
      return `₹${opts.spaceAfterSymbol ? ' ' : ''}${(amount / 1e7).toFixed(2)} Cr`;
    }
    if (Math.abs(amount) >= 1e5) {
      return `₹${opts.spaceAfterSymbol ? ' ' : ''}${(amount / 1e5).toFixed(2)} Lac`;
    }
  }
  // Use Intl.NumberFormat for Indian grouping
  const formatted = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: opts.maximumFractionDigits,
    minimumFractionDigits: opts.minimumFractionDigits,
    currencyDisplay: opts.style === 'code' ? 'code' : opts.style === 'name' ? 'name' : 'symbol',
  }).format(amount);
  // Remove default space after symbol if not desired, and show code if requested
  if (!opts.spaceAfterSymbol) {
    return opts.showCode
      ? formatted.replace(/\u00a0| /, '') + ' INR'
      : formatted.replace(/\u00a0| /, '');
  }
  return opts.showCode
    ? formatted + ' INR'
    : formatted;
}
