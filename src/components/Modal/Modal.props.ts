export interface ModalProps {
  children: React.ReactNode
  open: boolean
  toggle: (value: boolean) => void

  title?: string
}
