import { ArrRoutingModule } from './arr-routing.module';

describe('ArrRoutingModule', () => {
  let arrRoutingModule: ArrRoutingModule;

  beforeEach(() => {
    arrRoutingModule = new ArrRoutingModule();
  });

  it('should create an instance', () => {
    expect(arrRoutingModule).toBeTruthy();
  });
});
