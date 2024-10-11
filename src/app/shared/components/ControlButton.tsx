import { ControlButtonProps } from './ControlButton.types'

const ControlButton: React.FC<ControlButtonProps> = ({ children, onClick }) => (
  <div
    className='bg-slate-700 text-center p-1 m-1 rounded-md'
    onClick={onClick}
  >
    {children}
  </div>
)

export default ControlButton
