sinon = require 'sinon'

beforeEach ->
  @clock = sinon.useFakeTimers()

afterEach ->
  @clock.restore()
