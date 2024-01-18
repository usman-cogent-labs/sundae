import Col from 'react-bootstrap';

export default function ScoopOptions({ name, imagePath }) {
  return (
    <div>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:3030${imagePath}`}
        alt={`${name} scoop`}
      />
    </div>
  );
}
