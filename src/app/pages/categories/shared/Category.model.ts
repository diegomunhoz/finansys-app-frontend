import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class Category exteds BaseResourceModel {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string
  ){
    super();
  }
}
