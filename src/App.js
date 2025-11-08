
// Import des styles Bootstrap (chargés globalement)
import 'bootstrap/dist/css/bootstrap.min.css';
// Import des composants Bootstrap utilisés dans ce fichier
import { Container, Card, Button } from 'react-bootstrap';
import './App.css';

// Imports des composants React locaux (chaque fichier exporte un petit composant)
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

// Import d'une image locale placée dans le dossier `src`.
// Avec l'import, le bundler (Create React App / Vite / etc.) résout l'URL au moment de la construction.
import girl from './girl.png';

export default function App() {
  // Valeur de démonstration (on pourrait la recevoir en prop ou via état)
  const prenom = "Sabrina"; // Vous pouvez changer cette valeur pour tester

  return (
    <Container className="mt-5">
      {/* Carte produit : contient l'image, le nom, le prix et la description */}
      <Card style={{ width: '22rem', margin: 'auto', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
        {/* Composant Image (séparé pour la lisibilité) */}
        <Image />
        <Card.Body className="card-body-custom text-center">
          {/* Petits composants pour le nom, le prix et la description */}
          <Name />
          <Price />
          <Description />
          <Button variant="primary">Acheter</Button>
        </Card.Body>
      </Card>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {/* Exemple de rendu conditionnel : si `prenom` existe on affiche un message et l'avatar */}
        {prenom ? (
          <>
            <p>Hello, {prenom}!</p>
            {/* On utilise `src={girl}` — la variable `girl` contient l'URL résolue par le bundler */}
            <img
              src={girl}
              alt="avatar"
              style={{ borderRadius: '50%', marginTop: '10px' }}
            />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </Container>
  );
}
