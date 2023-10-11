import _ from 'lodash'

export interface KeyValue {
  name: string
  value: string
}
export const getKeyValueObject = (kvs: KeyValue[]): { [key: string]: string } => {
  return kvs.length ? kvs.reduce((v, c) => ({ ...v, [c.name]: c.value }), {}) : {}
}

export const getKeyValue = (kvs: KeyValue[], key: string): string => {
  return kvs.length ? getKeyValueObject(kvs)[key] : ''
}

export const transformObject = (obj: object) => {
  return _.omitBy(obj, item => !item)
}
