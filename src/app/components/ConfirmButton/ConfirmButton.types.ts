export type ConfirmButtonProps = {
  className?: string
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined
  initialText: string
  confirmText: string
  onClick: () => void
}
