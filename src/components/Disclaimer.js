import { useColorMode } from '@docusaurus/theme-common'

export default function Disclaimer({ children }) {
    const { colorMode } = useColorMode() 
    return (
      <div style={{
        padding: '10px',
        backgroundColor: colorMode == 'light' ? '#fffae6' : '#4a2c1d',
        borderLeft: '5px solid #ffa500',
        margin: '20px 0'
      }}>
        <strong>Disclaimer:</strong> {children}
      </div>
    );
  }
  