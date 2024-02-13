"use strict";

function Television(powerStatus, currentChannel) {
  this.powerStatus = powerStatus;
  this.currentChannel = currentChannel;
}
Television.prototype.changeChannel = function (channel) {
  this.currentChannel = channel;
};

Television.prototype.changePower = function (power) {
  this.powerStatus = power;
};

Television.prototype.getState = function () {
  console.log(
    "TV is " +
      this.powerStatus +
      ", " +
      "current channel: " +
      this.currentChannel
  );
};

Television.prototype.changeChannel("Channel 2");
Television.prototype.changePower("ON");
Television.prototype.getState();

Television.prototype.changeChannel("N/A");
Television.prototype.changePower("OFF");
Television.prototype.getState();

Television.prototype.changeChannel("Channel 5");
Television.prototype.changePower("ON");
Television.prototype.getState();
