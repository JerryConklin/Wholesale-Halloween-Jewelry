export const meta = () => {
  return [
    {title: 'Wholesale Halloween Jewelry | 1,000+ Styles'},
    {
      name: 'description',
      content:
        'Wholesale Halloween jewelry with over 1,000 styles available. Earrings, necklaces, bracelets, pins, keychains, hair accessories and wholesale assortments. In stock and ready to ship.',
    },
  ];
};

export default function Homepage() {
  return (
    <main
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '30px 20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <section
        style={{
          textAlign: 'center',
          padding: '60px 20px',
          background: '#111',
          color: 'white',
          borderRadius: '12px',
        }}
      >
        <div
          style={{
            color: '#ff8c00',
            fontWeight: 'bold',
            fontSize: '18px',
            marginBottom: '12px',
          }}
        >
          WHOLESALE ONLY
        </div>

        <h1 style={{fontSize: '48px', margin: '0 0 20px'}}>
          Wholesale Halloween Jewelry
        </h1>

        <p
          style={{
            fontSize: '23px',
            maxWidth: '850px',
            margin: '0 auto 20px',
          }}
        >
          Over 1,000 Halloween jewelry styles available and ready to ship.
        </p>

        <p style={{fontSize: '18px', lineHeight: '1.6'}}>
          Earrings • Necklaces • Bracelets • Brooch Pins • Keychains • Hair
          Accessories • Assortments
        </p>

        <a
          href="#assortments"
          style={{
            display: 'inline-block',
            marginTop: '20px',
            padding: '15px 28px',
            background: '#ff8c00',
            color: '#111',
            textDecoration: 'none',
            fontWeight: 'bold',
            borderRadius: '6px',
          }}
        >
          SHOP WHOLESALE ASSORTMENTS
        </a>
      </section>

      <section
        id="assortments"
        style={{
          padding: '55px 0',
          textAlign: 'center',
        }}
      >
        <h2 style={{fontSize: '34px'}}>Wholesale Assortments</h2>

        <p
          style={{
            fontSize: '19px',
            maxWidth: '850px',
            margin: '0 auto 35px',
            lineHeight: '1.6',
          }}
        >
          Our assortments are designed for retailers who want variety without
          having to select hundreds of individual styles. Assortments are
          balanced by category based on sales demand, with a larger selection
          of our strongest-selling Halloween earrings.
        </p>

        <div
          style={{
            border: '2px solid #ff8c00',
            borderRadius: '12px',
            padding: '35px',
            maxWidth: '750px',
            margin: '0 auto',
          }}
        >
          <h2 style={{fontSize: '30px', marginTop: 0}}>
            100 Dozen Halloween Jewelry Assortment
          </h2>

          <p style={{fontSize: '22px'}}>
            <strong>1,200 Pieces</strong>
          </p>

          <p style={{fontSize: '22px'}}>
            <strong>$24 per dozen</strong>
          </p>

          <p style={{fontSize: '26px'}}>
            <strong>$2.00 per piece</strong>
          </p>
<p style={{fontSize: '22px', margin: '8px 0'}}>
  <strong>Complete Assortment: $2,400</strong>
</p>
          <p style={{fontSize: '20px', fontWeight: 'bold', color: '#ff8c00'}}>
    Includes a FREE floor display.
</p>
<p style={{fontSize: '18px', lineHeight: '1.7'}}>
  Professionally selected from over 1,000 available Halloween jewelry styles
  to create a strong-selling retail assortment. Each assortment is balanced
  based on sell-through, with more of our strongest-selling category,
  Halloween earrings, plus necklaces, bracelets, brooch pins, keychains,
  hair accessories, and more.
</p>
<a
  href="#"
  style={{
    display: 'inline-block',
    marginTop: '20px',
    padding: '16px 30px',
    backgroundColor: '#ff8c00',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderRadius: '8px',
  }}
>
  ORDER THE 100 DOZEN ASSORTMENT — $2,400
</a>
        </div>
      </section>
<section
  style={{
    padding: '50px 25px',
    textAlign: 'center',
  }}
>
  <h2>Choose Your Wholesale Quantity</h2>

  <p style={{fontSize: '18px', lineHeight: '1.7'}}>
    Choose the quantity and product categories that work best for your store.
Larger orders receive automatic volume pricing.
  </p>
<div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
    gap: '18px',
    marginTop: '30px',
  }}
>
  <div style={{border: '2px solid #ddd', borderRadius: '12px', padding: '25px 15px'}}>
    <strong style={{fontSize: '22px'}}>1-24 Dozen</strong>
<div style={{fontSize: '20px', marginTop: '8px'}}>12–288 Pieces</div>
    <div style={{fontSize: '26px', marginTop: '10px'}}>$30 per dozen</div>
  </div>

  <div style={{border: '2px solid #ddd', borderRadius: '12px', padding: '25px 15px'}}>
    <strong style={{fontSize: '22px'}}>25-49 Dozen</strong>
<div style={{fontSize: '20px', marginTop: '8px'}}>300–588 Pieces</div>
    <div style={{fontSize: '26px', marginTop: '10px'}}>$27 per dozen</div>
  </div>

  <div style={{border: '2px solid #ff8c00', borderRadius: '12px', padding: '25px 15px'}}>
    <strong style={{fontSize: '22px'}}>50-99 Dozen</strong>
<div style={{fontSize: '20px', marginTop: '8px'}}>600–1,188 Pieces</div>
    <div style={{fontSize: '26px', marginTop: '10px'}}>$24 per dozen</div>
    <div style={{fontSize: '18px', marginTop: '10px'}}><strong>FREE Counter Display Included</strong></div>
  </div>

  <div style={{background: '#111', color: 'white', border: '2px solid #ff8c00', borderRadius: '12px', padding: '25px 15px'}}>
  <strong style={{fontSize: '22px'}}>100+ Dozen</strong>
  <div style={{fontSize: '20px', marginTop: '8px'}}>1,200+ Pieces</div>
  <div style={{fontSize: '30px', marginTop: '8px'}}><strong>$24 per dozen</strong></div>
  <div style={{fontSize: '22px', marginTop: '8px'}}><strong>$2.00 per piece</strong></div>
  <div style={{fontSize: '18px', marginTop: '10px', color: '#ff8c00'}}><strong>FREE Floor Display Included</strong></div>
</div>

</div>

  
</section>

<section
  style={{
    padding: '50px 25px',
    textAlign: 'center',
  }}
>
  <h2>Shop Wholesale Halloween Jewelry</h2>

  <p style={{fontSize: '18px', lineHeight: '1.7'}}>
    Shop our huge selection of wholesale Halloween jewelry by category.
  </p>
<div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '22px',
    marginTop: '30px',
  }}
>
<div
  style={{
    border: '2px solid #ff8c00',
    borderRadius: '12px',
    padding: '25px',
    maxWidth: '300px',
    margin: '30px auto 0',
  }}
>
<img
  src="/halloween-earrings.png"
  alt="Wholesale Halloween Earrings"
  style={{
    width: '100%',
    height: '250px',
    objectFit: 'contain',
    borderRadius: '8px',
    marginBottom: '20px',
  }}
/>
  <h3 style={{fontSize: '22px', marginTop: 0}}>
    Halloween Earrings
  </h3>

  <p style={{fontSize: '17px'}}>
    Huge selection of styles ready to ship
  </p>

  <a
    href="#"
    style={{
      display: 'inline-block',
      marginTop: '10px',
      padding: '12px 22px',
      backgroundColor: '#ff8c00',
      color: 'white',
      fontWeight: 'bold',
      textDecoration: 'none',
      borderRadius: '8px',
    }}
  >
    SHOP EARRINGS
  </a>
</div>
<div
  style={{
    border: '2px solid #ff8c00',
    borderRadius: '12px',
    padding: '25px',
    maxWidth: '300px',
    margin: '30px auto 0',
  }}
>
  <img
    src="/halloween-necklaces.PNG"
    alt="Wholesale Halloween Necklaces"
    style={{
      width: '100%',
      height: '250px',
      objectFit: 'contain',
      borderRadius: '8px',
      marginBottom: '20px',
    }}
  />

  <h3 style={{fontSize: '22px', marginTop: 0}}>
    Halloween Necklaces
  </h3>

  <p style={{fontSize: '17px'}}>
    Huge selection of styles ready to ship
  </p>

  <a
    href="#"
    style={{
      display: 'inline-block',
      marginTop: '10px',
      padding: '12px 22px',
      backgroundColor: '#ff8c00',
      color: 'white',
      fontWeight: 'bold',
      textDecoration: 'none',
      borderRadius: '8px',
    }}
  >
    SHOP NECKLACES
  </a>
</div>
<div
  style={{
    border: '2px solid #ff8c00',
    borderRadius: '12px',
    padding: '25px',
    maxWidth: '300px',
    margin: '30px auto 0',
  }}
>
  <img
    src="/halloween-bracelet.PNG"
    alt="Wholesale Halloween Bracelets"
    style={{
      width: '100%',
      height: '250px',
      objectFit: 'contain',
      borderRadius: '8px',
      marginBottom: '20px',
    }}
  />

  <h3 style={{fontSize: '22px', marginTop: 0}}>
    Halloween Bracelets
  </h3>

  <p style={{fontSize: '17px'}}>
    Huge selection of styles ready to ship
  </p>

  <a
    href="#"
    style={{
      display: 'inline-block',
      marginTop: '10px',
      padding: '12px 22px',
      backgroundColor: '#ff8c00',
      color: 'white',
      fontWeight: 'bold',
      textDecoration: 'none',
      borderRadius: '8px',
    }}
  >
    SHOP BRACELETS
  </a>
</div>
<div
  style={{
    border: '2px solid #ff8c00',
    borderRadius: '12px',
    padding: '25px',
    maxWidth: '300px',
    margin: '30px auto 0',
  }}
>
  <img
    src="/halloween-brooch-pin.PNG"
    alt="Wholesale Halloween Brooch Pins"
    style={{
      width: '100%',
      height: '250px',
      objectFit: 'contain',
      borderRadius: '8px',
      marginBottom: '20px',
    }}
  />

  <h3 style={{fontSize: '22px', marginTop: 0}}>
    Halloween Brooch Pins
  </h3>

  <p style={{fontSize: '17px'}}>
    Huge selection of styles ready to ship
  </p>

  <a
    href="#"
    style={{
      display: 'inline-block',
      marginTop: '10px',
      padding: '12px 22px',
      backgroundColor: '#ff8c00',
      color: 'white',
      fontWeight: 'bold',
      textDecoration: 'none',
      borderRadius: '8px',
    }}
  >
    SHOP BROOCH PINS
  </a>
</div>
<div
  style={{
    border: '2px solid #ff8c00',
    borderRadius: '12px',
    padding: '25px',
    maxWidth: '300px',
    margin: '30px auto 0',
  }}
>
  <img
    src="/halloween-keychains.PNG"
    alt="Wholesale Halloween Keychains"
    style={{
      width: '100%',
      height: '250px',
      objectFit: 'contain',
      borderRadius: '8px',
      marginBottom: '20px',
    }}
  />

  <h3 style={{fontSize: '22px', marginTop: 0}}>
    Halloween Keychains
  </h3>

  <p style={{fontSize: '17px'}}>
    Huge selection of styles ready to ship
  </p>

  <a
    href="#"
    style={{
      display: 'inline-block',
      marginTop: '10px',
      padding: '12px 22px',
      backgroundColor: '#ff8c00',
      color: 'white',
      fontWeight: 'bold',
      textDecoration: 'none',
      borderRadius: '8px',
    }}
  >
    SHOP KEYCHAINS
  </a>
</div>
<div
  style={{
    border: '2px solid #ff8c00',
    borderRadius: '12px',
    padding: '25px',
    maxWidth: '300px',
    margin: '30px auto 0',
  }}
>
  <img
    src="/halloween-hair-accessories.PNG"
    alt="Wholesale Halloween Hair Accessories"
    style={{
      width: '100%',
      height: '250px',
      objectFit: 'contain',
      borderRadius: '8px',
      marginBottom: '20px',
    }}
  />

  <h3 style={{fontSize: '22px', marginTop: 0}}>
    Halloween Hair Accessories
  </h3>

  <p style={{fontSize: '17px'}}>
    Huge selection of styles ready to ship
  </p>

  <a
    href="#"
    style={{
      display: 'inline-block',
      marginTop: '10px',
      padding: '12px 22px',
      backgroundColor: '#ff8c00',
      color: 'white',
      fontWeight: 'bold',
      textDecoration: 'none',
      borderRadius: '8px',
    }}
  >
    SHOP HAIR ACCESSORIES
  </a>
</div>
</div>
</section>      

<section
        style={{
          background: '#f4f4f4',
          padding: '40px 25px',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <h2>Built for Retailers</h2>

        <p style={{fontSize: '18px', lineHeight: '1.8'}}>
          Huge selection • Wholesale quantities • Merchandise ready to ship •
          Retail-friendly assortments • More than 40 years in the wholesale
          jewelry business
        </p>
      </section>
    </main>
  );
}