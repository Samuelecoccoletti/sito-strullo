export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-tarot-gold mb-8 text-center">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-tarot-cream/90">
          <section>
            <p className="text-sm text-tarot-cream/70 mb-8">
              Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-tarot-gold">
              1. Introduzione
            </h2>
            <p>
              STRULLO Associazione Culturale (di seguito "noi", "nostro" o "STRULLO") si impegna 
              a proteggere la privacy dei propri utenti. Questa Privacy Policy descrive come 
              raccogliamo, utilizziamo e proteggiamo le informazioni personali fornite attraverso 
              il nostro sito web.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-tarot-gold">
              2. Dati Raccolti
            </h2>
            <p>
              Raccogliamo i seguenti tipi di informazioni personali:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Nome e cognome</li>
              <li>Indirizzo email</li>
              <li>Informazioni di pagamento (gestite in modo sicuro tramite Stripe)</li>
              <li>Indirizzo di spedizione (per gli acquisti dallo shop)</li>
              <li>Dati di navigazione e utilizzo del sito</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-tarot-gold">
              3. Utilizzo dei Dati
            </h2>
            <p>
              Utilizziamo i dati raccolti per:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Gestire le iscrizioni dei soci</li>
              <li>Processare pagamenti e spedizioni</li>
              <li>Inviare comunicazioni relative all'associazione</li>
              <li>Migliorare i nostri servizi e il sito web</li>
              <li>Rispettare obblighi legali</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-tarot-gold">
              4. Protezione dei Dati
            </h2>
            <p>
              I pagamenti sono gestiti in modo sicuro tramite Stripe. Non memorizziamo 
              direttamente informazioni di carte di credito sui nostri server. Implementiamo 
              misure di sicurezza appropriate per proteggere i dati personali da accessi non 
              autorizzati, alterazioni o divulgazioni.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-tarot-gold">
              5. Condivisione dei Dati
            </h2>
            <p>
              Non vendiamo, scambiamo o trasferiamo a terze parti le informazioni personali 
              identificabili, salvo per i fornitori di servizi necessari al funzionamento del 
              sito (come Stripe per i pagamenti) o quando richiesto dalla legge.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-tarot-gold">
              6. Cookie
            </h2>
            <p>
              Il nostro sito utilizza cookie per migliorare l'esperienza utente. I cookie sono 
              piccoli file che vengono memorizzati sul dispositivo e ci aiutano a ricordare le 
              preferenze e a comprendere come viene utilizzato il sito.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-tarot-gold">
              7. Diritti degli Utenti
            </h2>
            <p>
              In conformità con il GDPR, gli utenti hanno diritto a:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Accedere ai propri dati personali</li>
              <li>Richiedere la correzione di dati inesatti</li>
              <li>Richiedere la cancellazione dei propri dati</li>
              <li>Opporsi al trattamento dei dati</li>
              <li>Richiedere la portabilità dei dati</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-tarot-gold">
              8. Contatti
            </h2>
            <p>
              Per esercitare i propri diritti o per qualsiasi domanda riguardante questa Privacy 
              Policy, è possibile contattarci all'indirizzo:
            </p>
            <p className="ml-4">
              <a href="mailto:privacy@strullo.it" className="text-tarot-gold hover:underline">
                privacy@strullo.it
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-tarot-gold">
              9. Modifiche alla Privacy Policy
            </h2>
            <p>
              Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento. 
              Le modifiche saranno pubblicate su questa pagina con la data di aggiornamento.
            </p>
          </section>

          <section className="bg-tarot-gold/5 border border-tarot-gold/20 rounded-lg p-6 mt-12">
            <h3 className="font-serif text-xl font-bold text-tarot-gold mb-3">
              Note Legali
            </h3>
            <p className="text-sm text-tarot-cream/80">
              Questa è una versione base di Privacy Policy. Si consiglia di consultare un legale 
              per personalizzarla in base alle specifiche esigenze dell'associazione e per 
              assicurarsi che sia conforme a tutte le normative applicabili.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

