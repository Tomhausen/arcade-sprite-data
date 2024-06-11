namespace sprites {
    function setData<T>(sprite: Sprite, name: string, value: T) {
        if (!sprite || !name) return;
        sprite.data[name] = value;
    }

    function getData<T>(sprite: Sprite, name: string): T {
        if (!sprite || !name) return undefined;
        return sprite.data[name] as T;
    }

    /**
     * Sets a number in the data of a sprite
     */
    //% blockId=spriteDataSetNumber block="set $sprite=variables_get data $name to number $value"
    //% name.shadow="spriteDataNumberNameShadow"
    //% group="Data" weight=10 blockGap=8
    export function setDataNumber(sprite: Sprite, name: string, value: number) {
        setData<number>(sprite, name, value);
    }

    /**
     * Change a number in the data of a sprite by a given value
     */
    //% blockId=spriteDataChangeNumber block="change $sprite=variables_get data $name by number $value"
    //% name.shadow="spriteDataNumberNameShadow"
    //% group="Data" weight=10 blockGap=8
    export function changeDataNumberBy(sprite: Sprite, name: string, value: number) {
        if (!sprite || !name) return;
        sprite.data[name] = (sprite.data[name] || 0) + value;
    }

    /**
     * Gets a number in the data of a sprite
     */
    //% blockId=spriteDataGetNumber block="$sprite=variables_get data $name as number"
    //% name.shadow="spriteDataNumberNameShadow"
    //% group="Data" weight=10 blockGap=8
    export function readDataNumber(sprite: Sprite, name: string): number {
        return getData<number>(sprite, name) || 0;
    }

    /**
     * Sets a string in the data of a sprite
     */
    //% blockId=spriteDataSetString block="set $sprite=variables_get data $name to string $value"
    //% name.shadow="spriteDataStringNameShadow"
    //% group="Data" weight=10 blockGap=8
    export function setDataString(sprite: Sprite, name: string, value: string) {
        setData<string>(sprite, name, value);
    }

    /**
     * Gets a string in the data of a sprite
     */
    //% blockId=spriteDataGetString block="$sprite=variables_get data $name as string"
    //% name.shadow="spriteDataStringNameShadow"
    //% group="Data" weight=10 blockGap=8
    export function readDataString(sprite: Sprite, name: string): string {
        return getData<string>(sprite, name) || "";
    }

    /**
     * Sets a boolean in the data of a sprite
     */
    //% blockId=spriteDataSetBoolean block="set $sprite=variables_get data $name to boolean $value"
    //% name.shadow="spriteDataBooleanNameShadow"
    //% group="Data" weight=10 blockGap=8
    export function setDataBoolean(sprite: Sprite, name: string, value: boolean) {
        setData<boolean>(sprite, name, value);
    }

    /**
     * Gets a boolean in the data of a sprite
     */
    //% blockId=spriteDataGetBoolean block="$sprite=variables_get data $name as boolean"
    //% name.shadow="spriteDataBooleanNameShadow"
    //% group="Data" weight=10 blockGap=8
    export function readDataBoolean(sprite: Sprite, name: string): boolean {
        return getData<boolean>(sprite, name) || false;
    }

    /**
     * Sets a sprite in the data of a sprite
     */
    //% blockId=spriteDataSetSprite block="set $sprite=variables_get data $name to sprite $value"
    //% name.shadow="spriteDataSpriteNameShadow"
    //% group="Data" weight=10 blockGap=8
    export function setDataSprite(sprite: Sprite, name: string, value: Sprite) {
        setData<Sprite>(sprite, name, value);
    }

    /**
     * Gets a sprite in the data of a sprite
     */
    //% blockId=spriteDataGetSprite block="$sprite=variables_get data $name as sprite"
    //% name.shadow="spriteDataSpriteNameShadow"
    //% group="Data" weight=10 blockGap=8
    export function readDataSprite(sprite: Sprite, name: string): Sprite {
        return getData<Sprite>(sprite, name);
    }

    /**
     * Sets an Image in the data of a sprite
     */
    //% blockId=spriteDataSetImageValue block="set $sprite=variables_get data $name to image $value"
    //% name.shadow="spriteDataImageNameShadow"
    //% value.shadow=screen_image_picker
    //% group="Data" weight=9 blockGap=8
    export function setDataImageValue(sprite: Sprite, name: string, value: Image) {
        setData<Image>(sprite, name, value);
    }

    /**
     * Gets an Image in the data of a sprite
     */
    //% blockId=spriteDataGetImage block="$sprite=variables_get data $name as image"
    //% name.shadow="spriteDataImageNameShadow"
    //% group="Data" weight=9 blockGap=8
    export function readDataImage(sprite: Sprite, name: string): Image {
        return getData<Image>(sprite, name);
    }
}