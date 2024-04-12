import IPackage from "../package/interfaces/IPackage";
import SimplePackageFactory from "../package/simplefactory/SimplePackageFactory";

class PackageService {
    public static createPackageEntity(_id: number | undefined = undefined, _name: string, _description: string, _price: number, _width: number, _height: number, _length: number, _weight: number): IPackage {
        const packageFactory: SimplePackageFactory = new SimplePackageFactory()
        let packageEntity: IPackage = null
        const volume = getVolume(_width, _height, _length)

        if (volume <= 1000) {
            packageEntity = packageFactory.createPackage('small')
        } else if (volume > 1000 && volume <= 5000) {
            packageEntity = packageFactory.createPackage('medium')
        } else {
            packageEntity = packageFactory.createPackage('big')
        }
        return packageEntity;
    }
}

function getVolume(_width: number, _height: number, _length: number): number {
    return _width * _height * _length;
}

export default PackageService