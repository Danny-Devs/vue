let currentEffect

export class Dep {
  subs = new Set();

  track() {
    if (currentEffect) {
      this.subs.add(currentEffect);
    }
  }

  trigger() {
    this.subs.forEach(sub => {
      sub();
    });
  }
}

export function effect(update) {
  currentEffect = update;
  update();
  currentEffect = null;
}
