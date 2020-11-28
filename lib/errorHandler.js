'use strict'

function errorHandler (error) {
  console.error(error)
  throw new Error('Fallo en una operacion del servidor')
}

module.export = errorHandler
