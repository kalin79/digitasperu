
type WgslModule = string;

declare module "*.wgsl" {
    const value: WgslModule;
    export default value;
}
