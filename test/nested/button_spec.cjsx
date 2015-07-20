React = require 'react/addons'
TestUtils = React.addons.TestUtils
Button = require '../../src/nested/button'

describe 'Button', ->
  it 'renders its children', ->
    component = TestUtils.renderIntoDocument <Button>Hi</Button>
    TestUtils.findRenderedDOMComponentWithTag(component, 'button')
    expect(component.getDOMNode().textContent).to.equal 'Hi'
