export type TransportType = {
  id: number
  type: string
  name: string
  maxWidth: number
  maxHeight: number
  maxLength: number
  maxWeight: number
  plate: string
}

export type NewTransportType = Omit<TransportType, "id">
