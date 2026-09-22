type CartFooterProps = {
  totalPrice: number;
};

export default function CartFooter({ totalPrice }: CartFooterProps) {
  return (
    <div className="flex justify-between items-center mt-5">
      <div className="flex flex-col">
        <div className="text-secondary-soft tracking-tighter text-xs font-dana-medium">
          مبلغ قابل پرداخت
        </div>
        <div className="text-base-content space-x-1">
          <span className="font-dana-demibold text-xl">
            {totalPrice.toLocaleString()}
          </span>
          <span className="text-sm font-dana">تومان</span>
        </div>
      </div>
      <button className="w-36 h-14 btn btn-accent text-xl transition-colors font-dana rounded-xl">
        ثبت سفارش
      </button>
    </div>
  );
}
