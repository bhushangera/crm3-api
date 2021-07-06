import mongoose, { Schema } from 'mongoose'
// import CategoryCodes from '../CategoryCodes/model'
import ScaleCharts from '../scaleCharts/model'
import PanelSize from '../panelSize/model'
import TaxRates from '../taxRates/model'
import Make from '../make/model'

export const codesSchema = new Schema({
  id: { type: String, trim: true },
  code: { type: String, trim: true },
  description: { type: String, trim: true },
  thickness: { type: Number, default: 0 }
})

const dimensionSchema = new Schema({
  id: { type: String, trim: true },
  code: { type: String, trim: true },
  description: { type: String, trim: true },
  width: { type: Number, default: 0 },
  height: { type: Number, default: 0 },
  depth: { type: Number, default: 0 },
  area: { type: Number, default: 0 },
  weight: { type: Number, default: 0 }
})

export const costFactorsSchema = new Schema({
  overheads: { type: Number, default: 0 }, // in percentage
  packaging: { type: Number, default: 0 },
  production: { type: Number, default: 0 },
  operativeMargin: { type: Number, default: 0 },
  dealerFactor: { type: Number, default: 0 },
  retailFactor: { type: Number, default: 0 },
  isImpex: { type: Boolean, default: false },
  forexFactor: { type: Number, default: 0 },
  customDuty: { type: Number, default: 0 },
  exportDuty: { type: Number, default: 0 },
  importDuty: { type: Number, default: 0 }
})
export const materialsSchema = new Schema(
  {
    uuid: { type: String, trim: true },

    groupId: { type: String, trim: true },
    groupCode: { type: String, trim: true },
    groupType: { type: String, trim: true },

    entityId: { type: String, trim: true },
    entityCode: { type: String, trim: true },

    entityCategoryId: { type: String, trim: true },
    entityCategoryCode: { type: String, trim: true },

    categoryCodeId: { type: String, trim: true },
    categoryCode: { type: String, trim: true },

    code: { type: String, trim: true },
    description: { type: String, trim: true },

    HSNCode: { type: String, trim: true },
    taxRate: TaxRates.schema,
    pbType: { type: String, trim: true },
    baseRate: { type: Number, default: 0 },

    image: { type: String, trim: true },
    slug: { type: String, trim: true },
    unit: { type: String, trim: true },
    procurementType: { type: String, trim: true },
    active: { type: Boolean, default: true },
    checked: { type: Boolean, default: false },
    // defaultVariantId: {type: String, trim: true},
    // uomDetails:
    brands: [Make.schema],
    heights: [ScaleCharts.schema],
    widths: [ScaleCharts.schema],
    depths: [ScaleCharts.schema],
    diameters: [ScaleCharts.schema],
    thickness: [ScaleCharts.schema],
    size: [PanelSize.schema],

    cabinatoryParameters: {
      classification: { type: String, trim: true }, // carcass/shutter/drw/tandem/shelf/dummy;
      carcass: {
        unitType: { type: String, trim: true, default: 'std' }, // std, l-corner, b-clorner, s-corner,
        instType: { type: String, trim: true, default: 'base' },
        backType: { type: String, trim: true, default: 'std' },
        geometry: { type: String, trim: true },
        joinery: { type: String, trim: true },
        hlBase: { type: Boolean, default: false },
        hlWall: { type: Boolean, default: false },
        hlTall: { type: Boolean, default: false }
      },
      shutter: {
        classification: { type: String, trim: true }, // laminated , painted, glazed
        mechanism: { type: String, trim: true }, // hinged , sliding, folding, flap, lift, bifold;
        heightAdj: { type: Number, default: 0 },
        widthAdj: { type: Number, default: 0 },
        stdHeight: { type: Number, default: 0 },
        stdWidth: { type: Number, default: 0 },
        hingeGapWidth: { type: Number, default: 0 },
        hingeGapHeight: { type: Number, default: 0 }

      },
      drawer: {
        classification: { type: String, trim: true }, // intenal, external, tandem
        mechanism: { type: String, trim: true }, // telescopic, concealed
        joinery: { type: String, trim: true }, // minifix, screwfix, loose,
        makeId: { type: String, trim: true }, // minifix, screwfix, loose,
        channelId: { type: String, trim: true } // minifix, screwfix, loose,
      }
      // part props
    },
    partProps: {
      gr: { type: Boolean, default: false },
      FEB: { type: Boolean, default: false },
      BEB: { type: Boolean, default: false },
      LEB: { type: Boolean, default: false },
      REB: { type: Boolean, default: false },
      FEBT: { type: Number, default: 0 },
      BEBT: { type: Number, default: 0 }
    },
    dimensions: dimensionSchema,
    costFactors: costFactorsSchema
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id
      }
    }
  }
)

materialsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      uuid: this.uuid,

      groupId: this.groupId,
      groupCode: this.groupCode,
      groupType: this.groupType,

      entityId: this.entityId,
      entityCode: this.entityCode,

      entityCategoryId: this.entityCategoryId,
      entityCategoryCode: this.entityCategoryCode,

      categoryCodeId: this.categoryCodeId,
      categoryCode: this.categoryCode,

      code: this.code,
      description: this.description,

      HSNCode: this.HSNCode,
      taxRate: this.taxRate,
      pbType: this.pbType,
      baseRate: this.baseRate,

      image: this.image,
      slug: this.slug,
      unit: this.unit,
      procurementType: this.procurementType,
      active: this.active,
      checked: this.checked,
      // defaultVariantId: {type: {type: String, trim: true}, trim: true},
      // uomDetails:
      brands: this.brands,
      heights: this.heights,
      widths: this.widths,
      depths: this.depths,
      diameters: this.diameters,
      thickness: this.thickness,
      size: this.size,

      generalProps: this.generalProps,
      cabinatoryParameters: this.cabinatoryParameters,
      dimensions: this.dimensions,
      partProps: this.partProps,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full
      ? {
        ...view
        // add properties for a full view
      }
      : view
  }
}

const model = mongoose.model('Materials', materialsSchema)

export const schema = model.schema
export default model
