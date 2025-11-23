export default function Loja() {
  return (
    <>
      <div className="actions">
        <button id="botao1" className="btn" onClick={payStripe}>
          Doar com Stripe
        </button>
        <button id="botao2" className="btn" onClick={payMP}>
          Doar com Mercado Pago
        </button>
      </div>
    </>
  );
}

const payStripe = async () => {
  const r = await fetch("/api/payments/stripe/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      items: [{ name: "VIP Neoslime", price: 1990, quantity: 1 }], // R$ 19,90
    }),
  });
  const data = await r.json();
  if (data.url) window.location.href = data.url;
  else alert("Falha ao iniciar pagamento Stripe");
};

const payMP = async () => {
  const r = await fetch("/api/payments/mp/preference", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      items: [{ title: "VIP Neoslime", unit_price: 19.9, quantity: 1 }],
    }),
  });
  const data = await r.json();
  if (data.init_point) window.location.href = data.init_point;
  else alert("Falha ao iniciar pagamento Mercado Pago");
};
