// src/patterns/structural/FacadePattern.ts
class Light {
    turnOn() { return "💡 조명 켜짐"; }
    turnOff() { return "💡 조명 꺼짐"; }
    dim(level: number) { return `💡 밝기 ${level}%로 조정`; }
}

class Thermostat {
    setTemperature(temp: number) { return `🌡️ 온도 ${temp}°C로 설정`; }
}

class SecuritySystem {
    arm() { return "🔒 보안 시스템 활성화"; }
    disarm() { return "🔓 보안 시스템 해제"; }
}

class MusicSystem {
    playMusic() { return "🎵 음악 재생"; }
    stopMusic() { return "🎵 음악 정지"; }
}

export class SmartHomeFacade {
    private light = new Light();
    private thermostat = new Thermostat();
    private security = new SecuritySystem();
    private music = new MusicSystem();

    leaveHome(): string[] {
        return [
            this.light.turnOff(),
            this.thermostat.setTemperature(18),
            this.security.arm(),
            this.music.stopMusic(),
            "🏠 외출 모드 활성화"
        ];
    }

    arriveHome(): string[] {
        return [
            this.security.disarm(),
            this.light.turnOn(),
            this.thermostat.setTemperature(22),
            this.music.playMusic(),
            "🏠 귀가 모드 활성화"
        ];
    }

    sleepMode(): string[] {
        return [
            this.light.dim(10),
            this.thermostat.setTemperature(20),
            this.security.arm(),
            this.music.stopMusic(),
            "😴 수면 모드 활성화"
        ];
    }

    movieMode(): string[] {
        return [
            this.light.dim(30),
            this.thermostat.setTemperature(21),
            this.music.playMusic(),
            "🎬 영화 모드 활성화"
        ];
    }
}