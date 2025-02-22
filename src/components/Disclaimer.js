export default function Disclaimer({ children }) {
    return (
      <div style={{
        padding: '10px',
        backgroundColor: '#fffae6',
        borderLeft: '5px solid #ffa500',
        margin: '20px 0'
      }}>
        <strong>Disclaimer:</strong> {children}
      </div>
    );
  }
  