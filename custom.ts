/**
 * Provides access to basic micro:bit functionality.
 */
//% weight=100 color=#0fbc11 icon=""
//% groups=['ドア', '照明', '警報', '屋根', その他']
enum  Akarusa{
    //% block="暗い(くらい)"
    IS_DARK,
    //% block="明るい(あかるい)"
    IS_BRIGHT,
}
enum Myenum{
    //% block="明るく  (あかるく)"
    One,
    //% block="暗く  (くらく)"
    Two
}
enum Light{
    //% block="全色　(青、赤、黄色)"
    One,
    //% block="青色"
    Two,
    //% block="赤色"
    Three,
    //% block="黄色"
    Four
}
enum Sound{
    //% block="Aボタン"
    One,
    //% block="Bボタン"
    Two,
    //% block="A+Bボタン"
    Three 
}
namespace house {
    /**
     * TODO: ドラッグ　アンド　ドロップで　右のエリアに設置してください
     * @param n ここでパラメーターの説明をしてください。, eg: 5
     * @param s ここでパラメーターの説明をしてください。, eg: "Hello"
     * @param e ここでパラメーターの説明をしてください。
     */
    //% block
    //% group="ドア"
    export function ドアを開ける(): void {
        pins.servoWritePin(AnalogPin.P0, 180)
    }

    /**
     * TODO: ドラッグ　アンド　ドロップで　右のエリアに設置してください
     */
    
    //% block
    //% group="ドア"
    export function ドアを閉める(): void {
        pins.servoWritePin(AnalogPin.P0, 180)
    }

     /**
     * TODO: ドラッグ　アンド　ドロップで　右のエリアに設置してください
     */
    
    //% block
    //% group="警報"
    export function 警報を鳴らす(): void {
        serial.redirect(
    SerialPin.P2,
    SerialPin.P0,
    BaudRate.BaudRate9600
    )
    basic.pause(1000)
    serial.writeLine("zi'singaha'xtuse'isi'masita.")
    for (let index = 0; index < 2; index++) {
    music.setTempo(400)
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(277, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    }
    }

    //% block="Aボタンを押すまで警報を鳴らし続ける。"
    //% group="警報"
    export function 警報を鳴らし続けるA(): void {
        
        for (let index = 0; index < 50; index++) {
        music.setVolume(255)
        music.setTempo(400)
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(415, music.beat(BeatFraction.Whole))
        music.playTone(466, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(311, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        if (input.buttonIsPressed(Button.A)) {
            break;
        }
    }
   
 }

 　　//% block="Bボタンを押すまで警報を鳴らし続ける。"
    //% group="警報"
    export function 警報を鳴らし続けるB(): void {
        
        for (let index = 0; index < 50; index++) {
        music.setVolume(255)
        music.setTempo(400)
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(415, music.beat(BeatFraction.Whole))
        music.playTone(466, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(311, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        if (input.buttonIsPressed(Button.B)) {
            break;
        }
    }
   
 }
 　　//% block="A+Bボタンを押すまで警報を鳴らし続ける。"
    //% group="警報"
    export function 警報を鳴らし続けるAB(): void {
        
        for (let index = 0; index < 50; index++) {
        music.setVolume(255)
        music.setTempo(400)
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(415, music.beat(BeatFraction.Whole))
        music.playTone(466, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(311, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        if (input.buttonIsPressed(Button.AB)) {
            break;
        }
    }
   
 }
    let 初期状態: boolean = true;
    let 加速度１: number;
    let 加速度２: number;
    const MOVING_THRESHOLD: number = 25;

     /**
     * micro:bitが動いているときtrueを、止まればfalseを返す。
     */
    //% block="microbitが動いている"
    //% group="その他"
    export function moveing(): boolean {
        if (初期状態) {
            加速度２ = input.acceleration(Dimension.Strength)
            初期状態 = false;
            return false;
        }
        加速度１ = 加速度２;
        加速度２ = input.acceleration(Dimension.Strength);

        if (Math.abs((加速度２ - 加速度１)) > MOVING_THRESHOLD) {
            return true;
        }
        return false;
    }

    /**
     * TODO: ドラッグ　アンド　ドロップで　右のエリアに設置してください
     */
    //% block
    //% group="照明"
    export function　青(): void{
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
    }
    /**
     * TODO: ドラッグ　アンド　ドロップで　右のエリアに設置してください
     */
    //% block
    //% group="照明"
    export function　赤(): void{
        pins.digitalWritePin(DigitalPin.P15, 1)       
    }
    /**
     * TODO: ドラッグ　アンド　ドロップで　右のエリアに設置してください
     */
    //% block
    //% group="照明"
    export function　黃(): void{
        pins.digitalWritePin(DigitalPin.P16, 1)       
    }
    /**
     * TODO: ドラッグ　アンド　ドロップで　右のエリアに設置してください
     */
    //% block
    //% group="照明"
    export function　全色(): void{
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 1)       
    }


     /**
     * TODO: ドラッグ　アンド　ドロップで　右のエリアに設置してください
     */
    //% block
    //% group="その他"
    export function ホタル(): void{
        let light_level = 0
        let sleep_time = 50
        light_level = 1
    for (let index = 0; index < 11; index++) {
        pins.analogWritePin(AnalogPin.P8, light_level - 1)
        pins.analogWritePin(AnalogPin.P12, light_level - 1)
        pins.analogWritePin(AnalogPin.P13, light_level - 1)
        pins.analogWritePin(AnalogPin.P14, light_level - 1)
        basic.pause(sleep_time)
        light_level = light_level * 2
    }
    light_level = 1024
    for (let index = 0; index < 11; index++) {
        pins.analogWritePin(AnalogPin.P8, light_level - 1)
        pins.analogWritePin(AnalogPin.P12, light_level - 1)
        pins.analogWritePin(AnalogPin.P13, light_level - 1)
        pins.analogWritePin(AnalogPin.P14, light_level - 1)
        basic.pause(sleep_time)
        light_level = light_level / 2
    }
    }

    /**
     * つまみでLEDを光らせることができるよ
     */
    //% block="つまみを回してLEDを光らせる"
    //% group="照明"
    export function fib(): void {
        let poten = 0
        let sleep_time = 0
        let light_level = 0

    poten = pins.analogReadPin(AnalogPin.P1)
    if (poten > 0 && 200 > poten) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else if (poten > 200 && 400 > poten) {
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else if (poten > 400 && 600 > poten) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else if (poten > 600 && 800 > poten) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else if (poten > 800 && 1000 > poten) {
        sleep_time = 50
        light_level = 1
        for (let index = 0; index < 11; index++) {
            pins.analogWritePin(AnalogPin.P8, light_level - 1)
            pins.analogWritePin(AnalogPin.P12, light_level - 1)
            pins.analogWritePin(AnalogPin.P13, light_level - 1)
            pins.analogWritePin(AnalogPin.P14, light_level - 1)
            basic.pause(sleep_time)
            light_level = light_level * 2
        }
        light_level = 1024
        for (let index = 0; index < 11; index++) {
            pins.analogWritePin(AnalogPin.P8, light_level - 1)
            pins.analogWritePin(AnalogPin.P12, light_level - 1)
            pins.analogWritePin(AnalogPin.P13, light_level - 1)
            pins.analogWritePin(AnalogPin.P14, light_level - 1)
            basic.pause(sleep_time)
            light_level = light_level / 2
        }
    } else {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
    }
    //% block="LEDをすべて消す"
    //% group="照明"
    export function turnoff(): void{
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)

    }

    //暗いor明るい判定ブロック
    let _今まで暗い: boolean = false;
    const _暗い判定閾値: number = 20;
    const _明るい判定閾値: number = 25;
    const _HYSTERESIS: number = _明るい判定閾値 - _暗い判定閾値;
/**
     * micro:bit本体の明るさセンサーが暗い場合（20未満）に真を返します。
     */
    //% block="暗い(くらい)"
    //%group="屋根"
    export function 暗い(): boolean {
        return _暗い判定(_暗い判定閾値, _明るい判定閾値);
    }
    function _lightLevelSampling(): number {
        const Kaisu: number = 50
        let accum明るさ: number = 0;
        for (let i = 0; i < Kaisu; i++) {
            accum明るさ += input.lightLevel();
            basic.pause(1);
        }
        let 明るさ = accum明るさ / Kaisu;
        return 明るさ;
    }
    // 暗い判定本体 
    function _暗い判定(暗い判定閾値: number, 明るい判定閾値: number): boolean {
        if ((暗い判定閾値 > 明るい判定閾値)
            || (暗い判定閾値 < 0)
            || (暗い判定閾値 > 255)
            || (明るい判定閾値 < 0)
            || (明るい判定閾値 > 255)) {
            control.assert(false, "threshold is abnormal");
        }

        let 現在の明るさ = _lightLevelSampling();

        const 暗い: boolean = true;
        const 明るい: boolean = false;

        if (_今まで暗い) { 
            if (現在の明るさ > 明るい判定閾値) {
                _今まで暗い = 明るい;
                return 明るい;
            }
            else {
                _今まで暗い = 暗い;
                return 暗い; 
            }
        }
        else {
            if (現在の明るさ < 暗い判定閾値) {
                _今まで暗い = 暗い;
                return 暗い; 
            }
            else {
                _今まで暗い = 明るい;
                return 明るい;
            }
        }
        control.assert(false);
    }

    /**
     * 自分で値を決めることができるよ
     * @param しきい値の初期値, eg: 20
     */
    //% block="%nよりも%s"
    //% n.min=0 n.max=255
    //%group="屋根"
    export function しきい値設定可能(n: number, s: Akarusa): boolean {
        if (_HYSTERESIS < 0) { control.assert(false); }
        if (n < 0) {
            n = 0;
        }
        if (n > 255) {
            n = 255;
        }
        if (s === Akarusa.IS_DARK) {
            let 暗い判定閾値: number = n;
            let 明るい判定閾値: number = n + _HYSTERESIS;
            if (明るい判定閾値 > 255) { 明るい判定閾値 = 255; }
            return _暗い判定(暗い判定閾値, 明るい判定閾値);
        }
        else if (s === Akarusa.IS_BRIGHT) {
            let 暗い判定閾値: number = n - _HYSTERESIS;
            let 明るい判定閾値: number = n;
            if (暗い判定閾値 < 0) { 暗い判定閾値 = 0; }
            return !_暗い判定(暗い判定閾値, 明るい判定閾値);
        }
        control.assert(false); return false;
    }
   
}
