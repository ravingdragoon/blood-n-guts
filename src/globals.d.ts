interface Window {
  BloodNGuts: any;
}

interface SplatFont {
  name: string;
  availableGlyphs: Array<string>;
}

interface ViolenceLevel {
  trailSplatDensity: number;
  floorSplatDensity: number;
  tokenSplatDensity: number;
  trailSplatSize: number;
  floorSplatSize: number;
  tokenSplatSize: number;
  splatSpread: number;
  healthThreshold: number;
  damageThreshold: number;
  deathMultiplier: number;
  sceneSplatPoolSize: number;
}

interface TokenSettings {
  floorSplatFont: string;
  tokenSplatFont: string;
  trailSplatFont: string;
  violenceLevel: string;
  bloodColor: string;
}

type SplatData = TileSplatData | TokenSplatData;

interface SplatDripData {
  glyph: string;
  x: number;
  y: number;
  angle: number;
  width?: number;
  height?: number;
}

interface TileSplatData extends Tile {
  id: string;
  drips: SplatDripData[];
  styleData: SplatStyle;
  offset: PIXI.Point;
  brushSettings: BrushSettings;
  z: number;
}

interface TokenSplatData extends TileSplatData {
  tokenId: string;
}

interface SplatStyle {
  fontFamily: string;
  fontSize: number;
  fill: string;
  align: string;
}

interface BrushSettings {
  brushColor: string;
  brushDensity: number;
  brushFlow: number;
  brushFont: string;
  brushSize: number;
  brushSpread: number;
  previewAlpha: number;
  visible: boolean;
}

interface SubmitEvent extends Event {
  submitter: any;
}

interface InteractionEvent extends PIXI.interaction.InteractionEvent {
  data: any;
}

interface HTMLFormElement {
  onsubmit: (this: GlobalEventHandlers, ev: SubmitEvent) => any | null;
}
