import { useState } from 'react'
import { Button } from '../../../components/ui/button'
import { ConfirmButtonProps } from './ConfirmButton.types'

export const ConfirmButton: React.FC<ConfirmButtonProps> = ({
  className,
  variant,
  initialText,
  confirmText,
  onClick,
}) => {
  const [clickedOnce, setClickedOnce] = useState(false)

  return !clickedOnce ? (
    <Button
      className={className}
      variant={variant}
      onClick={() => setClickedOnce(true)}
    >
      {initialText}
    </Button>
  ) : (
    <Button
      className={className}
      variant={variant}
      onClick={() => {
        onClick()
        setClickedOnce(false)
      }}
    >
      {confirmText}
    </Button>
  )
}
