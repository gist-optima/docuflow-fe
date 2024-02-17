export function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const DFSCenter = (
  container: HTMLDivElement,
): { top: number; bottom: number; containerId: number; order: number }[] => {
  let centerList: {
    top: number;
    bottom: number;
    containerId: number;
    order: number;
  }[] = [];

  if (container.id !== "") {
    centerList.push({
      top: container.getBoundingClientRect().top,
      bottom: container.getBoundingClientRect().bottom,
      containerId: parseInt(container.id.split("-")[0]),
      order: parseInt(container.id.split("-")[1]),
    });
  }

  if (container.children.length === 0) {
    return [
      {
        top: container.getBoundingClientRect().top,
        bottom: container.getBoundingClientRect().bottom,
        containerId: parseInt(container.id.split("-")[0]),
        order: parseInt(container.id.split("-")[1]),
      },
    ];
  } else {
    for (let i = 0; i < container.children.length; i++) {
      const child = container.children[i] as HTMLDivElement;

      if (child.id === "") {
        continue;
      }

      centerList = centerList.concat(DFSCenter(child));
    }

    return centerList;
  }
};
