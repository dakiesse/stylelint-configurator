import { TestBed, inject } from '@angular/core/testing'
import { GroupableService } from './groupable.service'

describe('GroupableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ GroupableService ],
    })
  })

  it('should ...', inject([ GroupableService ], (service: GroupableService) => {
    expect(service).toBeTruthy()
  }))

  it('should ...', inject([ GroupableService ], (service: GroupableService) => {
    service.giveNextIndex()
    service.giveNextIndex()
    service.giveNextIndex()
    const prevIndex = service.giveNextIndex()
    const lastIndex = service.giveNextIndex()

    console.log(prevIndex, lastIndex)

    expect(service.findNextIndexOf(prevIndex)).toBe(lastIndex)
    expect(service.findNextIndexOf(lastIndex)).toBeUndefined()
  }))
})
