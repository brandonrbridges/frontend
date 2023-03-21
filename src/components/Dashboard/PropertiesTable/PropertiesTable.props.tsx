export interface Property {
  _id: string
  user_id: string
  name?: string
  address: {
    line_1: string
    line_2?: string
    city: string
    county: string
    postcode: string
  }
  status: string
  tenant_id?: string
  tenant?: {
    first_name: string
    last_name: string
  }
}

export interface PropertiesTableProps {
  properties: Property[]
}
