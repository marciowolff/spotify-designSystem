/*import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Card from './index'

const props = {
  id: 'testeid',
  title: 'title card',
  subTitle: 'subTitle card',
  className: 'testeclassname',
  children: 'testechildren',
  style: { color: 'teste' },
  details: <button>details testes</button>
}

it('Card should be a function', () => {
  expect(typeof Card).toBe('function')
})

describe('Should to match snapshot"s of Card' , () => {
  it('Should to match snapshot Card default', () => {
    const tree = renderer.create(
      <Card
        id={props.id}
        title={props.title}
        subTitle={props.subTitle}
        className={props.className}
        style={props.style}
      >
        {props.children}
      </Card>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('Should to match snapshot Card headerSmall', () => {
    const tree = renderer.create(
      <Card
        id={props.id}
        title={props.title}
        subTitle={props.subTitle}
        className={props.className}
        style={props.style}
        headerSmall
      >
        {props.children}
      </Card>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('Should to match snapshot Card headerSmall and buttonBack', () => {
    const tree = renderer.create(
      <Card
        id={props.id}
        title={props.title}
        subTitle={props.subTitle}
        className={props.className}
        style={props.style}
        headerSmall
        buttonBack
      >
        {props.children}
      </Card>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('Should tests of Card full', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Card
        id={props.id}
        title={props.title}
        subTitle={props.subTitle}
        className={props.className}
        style={props.style}
        details={props.details}
        headerSmall
        buttonBack
        buttonLink={{
          url: 'link-url',
          name: 'name link'
        }}
      >
        {props.children}
      </Card>
    )
  })

  describe('About card title', () => {
    it('Should to valid if title has anbima-ui-card__title', () => {
      expect(wrapper.children().at(0).hasClass('anbima-ui-card__title')).toBeTruthy()
    })

    it('Should to valid if title has value of props', () => {
      expect(wrapper.children().at(0).children().at(1).text()).toBe('title card')
    })

    it('Should to valid if has buttonBack', () => {
      expect(wrapper.children().at(0).children().at(0).hasClass('anbima-ui-card__title__icon')).toBeTruthy()
    })

    it('Should to valid if buttonBack has icon back', () => {
      expect(wrapper.children().at(0).children().at(0).find('Icon').props().name).toBe('back')
    })

    it('Should go back when to click in buttonBack', () => {

      window.history.back = jest.fn()

      wrapper.children().at(0).children().at(0).simulate('click')

      expect(window.history.back).toHaveBeenCalled()
    })
  })

  describe('About card content section', () => {
    it('Should to valid if content of card has anbima-ui-card__content', () => {
      expect(wrapper.children().at(1).hasClass('anbima-ui-card__content')).toBeTruthy()
    })

    describe('About card header and subTitle', () => {
      it('Should to valid if header has anbima-ui-card__header--small', () => {
        expect(wrapper.children().at(1).children().at(0).hasClass('anbima-ui-card__header--small')).toBeTruthy()
      })

      it('Should to valid if header has the value of subtitle props', () => {
        expect(wrapper.children().at(1).children().at(0).children().at(0).children().at(0).text()).toBe('subTitle card')
      })

      it('Should to valid if header subTitle has anbima-ui-card__subTitle', () => {
        expect(wrapper.children().at(1).children().at(0).children().at(0).hasClass('anbima-ui-card__subTitle')).toBeTruthy()
      })

      it('Should to valid if header subTitle has details', () => {
        expect(wrapper.children().at(1).children().at(0).children().at(1).children().at(0).find('button')).toHaveLength(1)
      })

      it('Should to valid if header subTitle has details with text details testes', () => {
        expect(wrapper.children().at(1).children().at(0).children().at(1).children().at(0).find('button').text()).toBe('details testes')
      })

      it('Should to valid if link in content has anbima-ui-card__subTitle__link', () => {
        expect(wrapper.children().at(1).children().at(0).children().at(1).children().at(1).hasClass('anbima-ui-card__subTitle__link')).toBeTruthy()
      })

      it('Should to valid if link in content has href link-url', () => {
        expect(wrapper.children().at(1).children().at(0).children().at(1).children().at(1).props().href).toBe('link-url')
      })

      it('Should to valid if link in content has value name link', () => {
        expect(wrapper.children().at(1).children().at(0).children().at(1).children().at(1).text()).toBe('name link')
      })

    })

    describe('About card body', () => {
      it('Should to valid if content has anbima-ui-card__body', () => {
        expect(wrapper.children().at(1).children().at(1).hasClass('anbima-ui-card__body')).toBeTruthy()
      })

      it('Should to valid if content has children in body', () => {
        expect(wrapper.children().at(1).children().at(1).text()).toBe('testechildren')
      })

    })

  })

})

describe('Should tests of Card withdraw headerSmall', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Card
        id={props.id}
        title={props.title}
        subTitle={props.subTitle}
        className={props.className}
        style={props.style}
        details={props.details}
        buttonBack
        buttonLink={{
          url: 'link-url',
          name: 'name link'
        }}
      >
        {props.children}
      </Card>
    )
  })

  describe('About card header and subTitle', () => {
    it('Should to valid if header has anbima-ui-card__header', () => {
      expect(wrapper.children().at(1).children().at(0).hasClass('anbima-ui-card__header')).toBeTruthy()
    })

  })
})

describe('Should tests of Card withdraw props', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Card
        id={props.id}
        title={props.title}
        subTitle={props.subTitle}
        details={props.details}
        buttonBack
        buttonLink={{
          url: 'link-url',
        }}
      >
        {props.children}
      </Card>
    )
  })

  it('Should to valid if haven"t props className', () => {
    expect(wrapper.props().className).toBe('anbima-ui-card')
  })

  it('Should to valid if haven"t props style', () => {
    expect(wrapper.props().style).toEqual({})
  })

  it('Should to valid if haven"t props buttonLink', () => {
    expect(wrapper.children().at(1).children().at(0).children().at(1).children().at(1).text()).toBe('Link >')
  })

})
*/
