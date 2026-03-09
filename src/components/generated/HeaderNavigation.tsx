import React from 'react';
import { Search, ShoppingCart, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
interface HeaderNavigationProps {
  cartCount?: number;
  onSearchClick?: () => void;
  onCartClick?: () => void;
  onMenuToggle?: () => void;
  onQuoteClick?: () => void;
  className?: string;
}
const NavIcon = ({
  className
}: {
  className?: string;
}) => <div className={cn("flex flex-col items-end justify-center w-[55px] h-[45px] gap-[5px] cursor-pointer group", className)}>
    <span className="block h-[3px] bg-[#059669] w-[35px] transition-all duration-300 group-hover:w-[40px]" />
    <span className="block h-[3px] bg-[#059669] w-[40px] transition-all duration-300 group-hover:w-[30px]" />
    <span className="block h-[3px] bg-[#059669] w-[30px] transition-all duration-300 group-hover:w-[35px]" />
  </div>;

// @component: HeaderNavigation
export const HeaderNavigation = ({
  cartCount = 2,
  onSearchClick = () => {},
  onCartClick = () => {},
  onMenuToggle = () => {},
  onQuoteClick = () => {},
  className
}: HeaderNavigationProps) => {
  // @return
  return <div className={cn("flex items-center flex-wrap gap-x-3 lg:gap-x-[25px] gap-y-[15px] py-[15px] lg:py-[20px] bg-white px-3 lg:px-6 shadow-sm", className)}>
      {/* Search and Cart Section */}
      <div className="flex items-center gap-3 lg:gap-[20px]">
        {/* Search Icon */}
        <button onClick={onSearchClick} className="text-[#111111] hover:text-[#059669] transition-colors duration-300 p-1 lg:p-2" aria-label="Search">
          <Search size={22} strokeWidth={1.5} />
        </button>

        {/* Cart Icon */}
        <button onClick={onCartClick} className="relative text-[#111111] hover:text-[#059669] transition-colors duration-300 p-1 lg:p-2" aria-label="View Cart">
          <ShoppingCart size={22} strokeWidth={1.5} />
          <span className="absolute -top-[5px] -right-[5px] h-[18px] min-w-[18px] px-1 text-[9px] font-medium leading-[18px] bg-[#059669] text-white rounded-full flex items-center justify-center transition-all duration-500">
            {cartCount < 10 ? `0${cartCount}` : cartCount}
          </span>
        </button>
      </div>

      {/* Sidebar Trigger - visible on tablet when nav is hidden */}
      <div onClick={onMenuToggle} className="relative hidden lg:block xl:hidden">
        <NavIcon />
      </div>

      {/* Action Button */}
      <div className="relative group overflow-hidden hidden lg:block">
        <button onClick={onQuoteClick} className="relative z-10 px-5 xl:px-[35px] py-[12px] xl:py-[15px] bg-[#059669] text-white text-[13px] xl:text-[14px] font-bold uppercase tracking-wider flex items-center gap-2 transition-colors duration-300 group-hover:text-white h-[48px] xl:h-[55px] overflow-hidden" style={{
        fontFamily: "Unbounded"
      }}>
          <span className="relative z-10 flex items-center gap-2">Get a Quote <ArrowRight size={16} strokeWidth={3} className="inline-block transition-transform group-hover:translate-x-1" /></span>
          <div className="absolute inset-0 bg-[#111111] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
        </button>
      </div>
    </div>;
};