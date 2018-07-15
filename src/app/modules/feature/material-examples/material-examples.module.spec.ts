import { MaterialExamplesModule } from './material-examples.module';

describe('MaterialExamplesModule', () => {
  let materialExamplesModule: MaterialExamplesModule;

  beforeEach(() => {
    materialExamplesModule = new MaterialExamplesModule();
  });

  it('should create an instance', () => {
    expect(materialExamplesModule).toBeTruthy();
  });
});
