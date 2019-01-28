function renderTimeline() {
  function VerticalTimeline(element) {
    this.element = element;
    this.blocks = this.element.getElementsByClassName('js-cd-block');
    this.images = this.element.getElementsByClassName('js-cd-img');
    this.contents = this.element.getElementsByClassName('js-cd-content');
    this.offset = 0.8;
    this.hideBlocks();
  }

  VerticalTimeline.prototype.hideBlocks = function hideBlocks() {
    const self = this;
    for (let i = 0; i < this.blocks.length; i += 1) {
      (function hide(index) {
        if (self.blocks[index].getBoundingClientRect().top > window.innerHeight * self.offset) {
          self.images[index].classList.add('cd-is-hidden');
          self.contents[index].classList.add('cd-is-hidden');
        }
      }(i));
    }
  };

  VerticalTimeline.prototype.showBlocks = function showBlocks() {
    const self = this;
    for (let i = 0; i < this.blocks.length; i += 1) {
      (function show(index) {
        if (self.contents[index].classList.contains('cd-is-hidden') && self.blocks[i].getBoundingClientRect().top <= window.innerHeight * self.offset) {
          self.images[index].classList.add('cd-timeline__img--bounce-in');
          self.contents[index].classList.add('cd-timeline__content--bounce-in');
          self.images[index].classList.remove('cd-is-hidden');
          self.contents[index].classList.remove('cd-is-hidden');
        }
      }(i));
    }
  };

  const verticalTimelines = document.getElementsByClassName('js-cd-timeline');
  const verticalTimelinesArray = [];
  let scrolling = false;
  if (verticalTimelines.length > 0) {
    for (let i = 0; i < verticalTimelines.length; i += 1) {
      (function render(index) {
        verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[index]));
      }(i));
    }

    window.addEventListener('scroll', () => {
      if (!scrolling) {
        scrolling = true;
        if (!window.requestAnimationFrame) {
          setTimeout(() => {
            verticalTimelinesArray.forEach((timeline) => {
              timeline.showBlocks();
            });
            scrolling = false;
          }, 250);
        } else {
          window.requestAnimationFrame(() => {
            verticalTimelinesArray.forEach((timeline) => {
              timeline.showBlocks();
            });
            scrolling = false;
          });
        }
      }
    });
  }
}


$(document).ready(() => {
  renderTimeline();
});
