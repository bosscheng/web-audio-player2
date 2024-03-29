!function (e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var i = t();
        for (var n in i) ("object" == typeof exports ? exports : e)[n] = i[n]
    }
}("undefined" != typeof self ? self : this, (function () {
    return function (e) {
        var t = {};

        function i(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {i: n, l: !1, exports: {}};
            return e[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
        }

        return i.m = e, i.c = t, i.d = function (e, t, n) {
            i.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
        }, i.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, i.t = function (e, t) {
            if (1 & t && (e = i(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var o in e) i.d(n, o, function (t) {
                return e[t]
            }.bind(null, o));
            return n
        }, i.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return i.d(t, "a", t), t
        }, i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, i.p = "", i(i.s = 31)
    }({
        12: function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            var n = function () {
                function e() {
                    this.handlerListMap = {microphoneStateUpdate: []}
                }

                return e.getInstance = function () {
                    return e.instance || (e.instance = new e), e.instance
                }, e.prototype.addEventHandler = function (e, t) {
                    if (!this.handlerListMap[e]) return !1;
                    if ("function" != typeof t) throw new Error("Params callBack is not a Function");
                    return -1 == this.handlerListMap[e].indexOf(t) && this.handlerListMap[e].push(t), !0
                }, e.prototype.removeEventHandler = function (e, t) {
                    return !!this.handlerListMap[e] && (this.handlerListMap[e] = t ? this.handlerListMap[e].filter((function (e) {
                        return e !== t
                    })) : [], !0)
                }, e.prototype.emit = function (e) {
                    for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                    this.handlerListMap[e] && this.handlerListMap[e].forEach((function (i) {
                        try {
                            setTimeout((function () {
                                i.apply(void 0, t)
                            }), 0)
                        } catch (t) {
                            console.error("dispatch " + e + " " + t)
                        }
                    }))
                }, e
            }();
            t.default = n
        }, 31: function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.RangeAudio = void 0;
            var n = i(32);
            t.RangeAudio = {
                type: "RangeAudio", install: function (e) {
                    Object.defineProperty(e.prototype, "createRangeAudioInstance", {
                        value: function () {
                            return this.rangeAudio || (this.rangeAudio = n.ZegoExpressRangeAudio.getInstance(this)), this.rangeAudio
                        }, writable: !1
                    })
                }
            }
        }, 32: function (e, t, i) {
            "use strict";
            var n = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {default: e}
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoExpressRangeAudio = void 0;
            var o = n(i(33)), r = function () {
                function e(e) {
                    this.zegoAudioListener = o.default.getInstance(e)
                }

                return e.getInstance = function (t) {
                    if (!e.instance) {
                        if (!t) throw Error("create instance failed.");
                        e.instance = new e(t)
                    }
                    return e.instance
                }, e.prototype.on = function (e, t) {
                    return this.zegoAudioListener.on(e, t)
                }, e.prototype.off = function (e, t) {
                    return this.zegoAudioListener.off(e, t)
                }, e.prototype.setAudioReceiveRange = function (e) {
                    this.zegoAudioListener.setAudioReceiveRange(e)
                }, e.prototype.updateSelfPosition = function (e, t, i, n) {
                    this.zegoAudioListener.updateSelfPosition(e, t, i, n)
                }, e.prototype.updateAudioSource = function (e, t) {
                    this.zegoAudioListener.updateAudioSource(e, t)
                }, e.prototype.enableSpatializer = function (e) {
                    return this.zegoAudioListener.enableSpatializer(e)
                }, e.prototype.enableMicrophone = function (e) {
                    return this.zegoAudioListener.enableMicrophone(e)
                }, e.prototype.enableSpeaker = function (e) {
                    return this.zegoAudioListener.enableSpeaker(e)
                }, e.prototype.setRangeAudioMode = function (e) {
                    this.zegoAudioListener.setRangeAudioMode(e)
                }, e.prototype.setTeamID = function (e) {
                    this.zegoAudioListener.setRangeAudioTeamID(e)
                }, e.prototype.isAudioContextRunning = function () {
                    return "running" === this.zegoAudioListener.getAudioContextState()
                }, e.prototype.resumeAudioContext = function () {
                    return this.zegoAudioListener.resumeAudioContext()
                }, e
            }();
            t.ZegoExpressRangeAudio = r
        }, 33: function (e, t, i) {
            "use strict";
            var n = this && this.__awaiter || function (e, t, i, n) {
                return new (i || (i = Promise))((function (o, r) {
                    function a(e) {
                        try {
                            u(n.next(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(e) {
                        try {
                            u(n.throw(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i((function (e) {
                            e(t)
                        }))).then(a, s)
                    }

                    u((n = n.apply(e, t || [])).next())
                }))
            }, o = this && this.__generator || function (e, t) {
                var i, n, o, r, a = {
                    label: 0, sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    }, trys: [], ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                }), r;

                function s(r) {
                    return function (s) {
                        return function (r) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, r[1])).done) return o;
                                switch (n = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                                    case 0:
                                    case 1:
                                        o = r;
                                        break;
                                    case 4:
                                        return a.label++, {value: r[1], done: !1};
                                    case 5:
                                        a.label++, n = r[1], r = [0];
                                        continue;
                                    case 7:
                                        r = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                            a.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && a.label < o[1]) {
                                            a.label = o[1], o = r;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(r);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                r = t.call(e, a)
                            } catch (e) {
                                r = [6, e], n = 0
                            } finally {
                                i = o = 0
                            }
                            if (5 & r[0]) throw r[1];
                            return {value: r[0] ? r[1] : void 0, done: !0}
                        }([r, s])
                    }
                }
            }, r = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {default: e}
            };
            Object.defineProperty(t, "__esModule", {value: !0});
            var a = r(i(34)), s = r(i(35)), u = r(i(36)), d = r(i(12)), c = i(37), h = i(5), l = function () {
                function e(e) {
                    var t = this;
                    this.isSpatial = !1, this.audioSourceList = [], this.speakingUserIdList = [], this._audioCtx = null, this.zegoRTC = e, this.zegoRTC.on("roomStreamUpdate", (function (e, i, n) {
                        var o = n.map((function (e) {
                            return e.streamID
                        }));
                        "DELETE" === i ? t.speakingUserIdList = t.speakingUserIdList.filter((function (e) {
                            var i = !o.includes(e);
                            if (!i) {
                                var n = t.audioSourceMap[e];
                                n && n.isPlaying && n.stopPlayingAudio()
                            }
                            return i
                        })) : "ADD" === i && (t.speakingUserIdList = t.speakingUserIdList.concat(o), n.forEach((function (e) {
                            if (!t.audioSourceMap[e.streamID]) {
                                var i = t.getStreamInfo(e.extraInfo), n = i.teamID, o = i.sendMode, r = new a.default({
                                    userID: e.streamID,
                                    teamID: n,
                                    sendMode: o
                                }, {
                                    audioCtx: t.audioCtx,
                                    zegoRTC: t.zegoRTC,
                                    isSpatial: t.isSpatial,
                                    maxDistance: t.rangeListener.recvRange
                                });
                                t.audioSourceList.push(r), t.playStreamHandler.handlePlayAudioTask()
                            }
                        }))), t.playStreamHandler.setAudioSourceList(t.speakingAudioSourceList)
                    })), this.zegoRTC.on("playerStateUpdate", (function (e) {
                        var i = t.audioSourceMap[e.streamID];
                        i && ("NO_PLAY" === e.state ? i.isPlaying = !1 : i.isPlaying = !0)
                    })), this.zegoRTC.on("streamExtraInfoUpdate", (function (e, i) {
                        i.forEach((function (e) {
                            var i = t.audioSourceMap[e.streamID];
                            if (i) {
                                var n = t.getStreamInfo(e.extraInfo), o = n.teamID, r = n.sendMode;
                                o !== i.teamID && (i.teamID = o, t.enableSpatializer(t.isSpatial)), void 0 !== r && (i.sendMode = r), t.playStreamHandler.handlePlayAudioTask()
                            }
                        }))
                    })), this.zegoRTC.RTM._on("_roomStateUpdate", (function (e, i) {
                        "CONNECTED" === i ? (t.roomID = e, t.rangeListener.userID = t.zegoRTC.RTM.getUserID()) : "DISCONNECTED" === i && (t.roomID = void 0, t.rangeListener.reset(), t.audioSourceList = [])
                    }));
                    var i = window.AudioContext || window.webkitAudioContext;
                    this._audioCtx = this.zegoRTC && this.zegoRTC.ac || new i, this.rangeListener = s.default.getInstance(this.audioCtx, this.zegoRTC), this.playStreamHandler = u.default.getInstance(this.rangeListener), this.eventManager = d.default.getInstance()
                }

                return Object.defineProperty(e.prototype, "audioSourceMap", {
                    get: function () {
                        return this.audioSourceList.reduce((function (e, t) {
                            return t.userID && (e[t.userID] = t), e
                        }), {})
                    }, enumerable: !1, configurable: !0
                }), Object.defineProperty(e.prototype, "speakingAudioSourceList", {
                    get: function () {
                        var e = this;
                        return this.audioSourceList.filter((function (t) {
                            return !!e.speakingUserIdList.includes(t.userID)
                        }))
                    }, enumerable: !1, configurable: !0
                }), Object.defineProperty(e.prototype, "playingAudioSourceList", {
                    get: function () {
                        return this.audioSourceList.filter((function (e) {
                            return e.isPlaying
                        }))
                    }, enumerable: !1, configurable: !0
                }), Object.defineProperty(e.prototype, "audioCtx", {
                    get: function () {
                        if (!this._audioCtx) {
                            var e = window.AudioContext || window.webkitAudioContext;
                            this._audioCtx = new e
                        }
                        return this._audioCtx
                    }, enumerable: !1, configurable: !0
                }), e.getInstance = function (t) {
                    return e.instance || (e.instance = new e(t)), e.instance
                }, e.prototype.resumeAudioContext = function () {
                    return n(this, void 0, void 0, (function () {
                        var e = this;
                        return o(this, (function (t) {
                            return [2, new Promise((function (t) {
                                e.audioCtx.onstatechange = function () {
                                    "running" === e.audioCtx.state && t(!0)
                                }, e.audioCtx.suspend(), e.audioCtx.resume(), setTimeout((function () {
                                    t(!1)
                                }), 3e3)
                            }))]
                        }))
                    }))
                }, e.prototype.getAudioContextState = function () {
                    return this.audioCtx.state
                }, e.prototype.getStreamInfo = function (e) {
                    var t = void 0, i = void 0;
                    try {
                        var n = JSON.parse(e);
                        t = n.range_audio_team_id, [h.ZegoRangeAudioMode.World, h.ZegoRangeAudioMode.Team].includes(n.range_audio_mode) && (i = n.range_audio_mode)
                    } catch (e) {
                    }
                    return {teamID: t, sendMode: i}
                }, e.prototype.setAudioReceiveRange = function (e) {
                    if (!c.checkNumber(e)) throw Error("Failed to execute 'setAudioReceiveRange': Argument 'range' requires to be type number.");
                    if ((e = Number(e)) < 0) throw Error("Failed to execute 'setAudioReceiveRange': Argument 'range' can not be less than 0.");
                    this.rangeListener.recvRange = e, this.audioSourceList.forEach((function (t) {
                        t.setMaxDistance(e)
                    }))
                }, e.prototype.updateSelfPosition = function (e, t, i, n) {
                    var o = function (e) {
                        return "Failed to execute 'updateSelfPosition': Argument '" + e + "' requires an array of type number.\""
                    };
                    if (!c.checkCoordinate(e)) throw new Error(o("position"));
                    if (!c.checkCoordinate(t)) throw new Error(o("axisForward"));
                    if (!c.checkCoordinate(i)) throw new Error(o("axisRight"));
                    if (!c.checkCoordinate(n)) throw new Error(o("axisUp"));
                    this.rangeListener && this.rangeListener.updateSelfPosition(e, t, n), this.playStreamHandler.setListener(this.rangeListener)
                }, e.prototype.updateAudioSource = function (e, t) {
                    if (e = String(e), !c.checkCoordinate(t)) throw new Error("Failed to execute 'updateAudioSource': Arguments 'position' must be an array of type number.");
                    var i = this.audioSourceMap[e];
                    i ? i.setPosition(t) : (i = new a.default({userID: e, position: t}, {
                        audioCtx: this.audioCtx,
                        zegoRTC: this.zegoRTC,
                        isSpatial: this.isSpatial,
                        maxDistance: this.rangeListener.recvRange
                    }), this.enableSpatializer(this.isSpatial), this.audioSourceList.push(i)), this.playStreamHandler.setAudioSourceList(this.speakingAudioSourceList)
                }, e.prototype.enableMicrophone = function (e) {
                    if (void 0 === e && (e = !0), !this.rangeListener.userID) throw new Error("Enable mic failed. Please log in room first.");
                    return e ? this.rangeListener.startPublishingStream() : this.rangeListener.stopPublishingStream()
                }, e.prototype.enableSpeaker = function (e) {
                    if (void 0 === e && (e = !0), !this.roomID) throw new Error("Enable speaker failed. Please log in room first.");
                    this.playStreamHandler.isEnable = e, e ? (this.playStreamHandler.startPlayingAudioStream(), this.playStreamHandler.handlePlayAudioTask()) : this.playStreamHandler.stopPlayingAudioStream()
                }, e.prototype.enableSpatializer = function (e) {
                    var t = this;
                    void 0 === e && (e = !0), this.isSpatial = !!e, this.audioSourceList.forEach((function (i) {
                        var n = !(![i.teamID, t.rangeListener.teamID].includes(void 0) && t.rangeListener.teamID === i.teamID) && e;
                        i.enableSpatializer(n)
                    })), e && this.rangeListener.updateListenerEffect()
                }, e.prototype.setRangeAudioTeamID = function (e) {
                    this.rangeListener.setTeamID(e), this.enableSpatializer(this.isSpatial), this.playStreamHandler.handlePlayAudioTask()
                }, e.prototype.setRangeAudioMode = function (e) {
                    this.rangeListener.setSendMode(e), this.rangeListener.setRecvMode(e), this.playStreamHandler.handlePlayAudioTask()
                }, e.prototype.on = function (e, t) {
                    return this.eventManager.addEventHandler(e, t)
                }, e.prototype.off = function (e, t) {
                    return this.eventManager.removeEventHandler(e, t)
                }, e
            }();
            t.default = l
        }, 34: function (e, t, i) {
            "use strict";
            var n = this && this.__awaiter || function (e, t, i, n) {
                return new (i || (i = Promise))((function (o, r) {
                    function a(e) {
                        try {
                            u(n.next(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(e) {
                        try {
                            u(n.throw(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i((function (e) {
                            e(t)
                        }))).then(a, s)
                    }

                    u((n = n.apply(e, t || [])).next())
                }))
            }, o = this && this.__generator || function (e, t) {
                var i, n, o, r, a = {
                    label: 0, sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    }, trys: [], ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                }), r;

                function s(r) {
                    return function (s) {
                        return function (r) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, r[1])).done) return o;
                                switch (n = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                                    case 0:
                                    case 1:
                                        o = r;
                                        break;
                                    case 4:
                                        return a.label++, {value: r[1], done: !1};
                                    case 5:
                                        a.label++, n = r[1], r = [0];
                                        continue;
                                    case 7:
                                        r = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                            a.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && a.label < o[1]) {
                                            a.label = o[1], o = r;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(r);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                r = t.call(e, a)
                            } catch (e) {
                                r = [6, e], n = 0
                            } finally {
                                i = o = 0
                            }
                            if (5 & r[0]) throw r[1];
                            return {value: r[0] ? r[1] : void 0, done: !0}
                        }([r, s])
                    }
                }
            };
            Object.defineProperty(t, "__esModule", {value: !0});
            var r = i(5), a = function () {
                function e(e, t) {
                    this.panner = null, this.isSpatial = !1, this.autoPlay = !0, this.position = null, this.stream = null, this.sourceNode = null, this.isPlaying = !1, this.distance = null, this.audioCtx = t.audioCtx, this.zegoRTC = t.zegoRTC, this.isSpatial = t.isSpatial, this.maxDistance = t.maxDistance || 1e5, this.userID = e.userID, this.teamID = e.teamID, this.sendMode = void 0 !== e.sendMode ? e.sendMode : r.ZegoRangeAudioMode.World, e.position && (this.position = e.position)
                }

                return Object.defineProperty(e.prototype, "audioWrapper", {
                    get: function () {
                        var e = document.getElementById("#zg-audio-source-wrapper");
                        return e || ((e = document.createElement("div")).setAttribute("id", "zg-audio-source-wrapper"), document.body.appendChild(e)), e
                    }, enumerable: !1, configurable: !0
                }), e.prototype.createPanner = function () {
                    var e = this.position || [0, 0, 0], t = this.maxDistance;
                    return new PannerNode(this.audioCtx, {
                        panningModel: "HRTF",
                        distanceModel: "linear",
                        refDistance: 1,
                        maxDistance: t,
                        rolloffFactor: 1,
                        coneOuterGain: .4,
                        positionX: e[1],
                        positionY: e[0],
                        positionZ: -e[0]
                    })
                }, e.prototype.startPlayingAudio = function () {
                    return n(this, void 0, void 0, (function () {
                        var e, t;
                        return o(this, (function (i) {
                            switch (i.label) {
                                case 0:
                                    return (e = document.getElementById("zg-audio-source-" + this.userID)) ? [3, 2] : ((e = document.createElement("audio")).setAttribute("autoplay", "autoplay"), e.setAttribute("id", "zg-audio-source-" + this.userID), e.setAttribute("crossorigin", "anonymous"), t = this, [4, this.zegoRTC.startPlayingStream(this.userID)]);
                                case 1:
                                    t.stream = i.sent(), this.audioWrapper.appendChild(e), this.stream && (e.srcObject = this.stream, this.sourceNode = this.audioCtx.createMediaStreamSource(this.stream)), this.panner || (this.panner = this.createPanner()), this.sourceNode && this.enableSpatializer(this.isSpatial, !0), "suspended" === this.audioCtx.state && this.audioCtx.resume(), i.label = 2;
                                case 2:
                                    return e && e.parentNode && e.parentNode.removeChild(e), [2]
                            }
                        }))
                    }))
                }, e.prototype.stopPlayingAudio = function () {
                    this.isPlaying && this.zegoRTC.stopPlayingStream(this.userID), this.stream = null, this.sourceNode && (this.sourceNode.disconnect(), this.sourceNode = null)
                }, e.prototype.setPosition = function (e) {
                    this.position = e, this.panner && (this.panner.positionX.value = e[1], this.panner.positionY.value = e[2], this.panner.positionZ.value = -e[0])
                }, e.prototype.setMaxDistance = function (e) {
                    this.maxDistance = e, this.panner && (this.panner.maxDistance = this.maxDistance)
                }, e.prototype.getDistanceFromListener = function (e) {
                    var t = this.position, i = e.position;
                    if (!i || !t) return null;
                    var n = [t[0] - i[0], t[1] - i[1], t[2] - i[2]];
                    return this.distance = Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2)), this.distance
                }, e.prototype.enableSpatializer = function (e, t) {
                    void 0 === t && (t = !1), (t || this.isSpatial !== e) && (this.isSpatial = e, this.sourceNode && (e && this.panner ? (this.sourceNode.disconnect(), this.sourceNode.connect(this.panner).connect(this.audioCtx.destination)) : e || (this.sourceNode.disconnect(), this.sourceNode.connect(this.audioCtx.destination))))
                }, e
            }();
            t.default = a
        }, 35: function (e, t, i) {
            "use strict";
            var n = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {default: e}
            };
            Object.defineProperty(t, "__esModule", {value: !0});
            var o = i(5), r = n(i(12)), a = function () {
                function e(e, t) {
                    var i = this;
                    this.recvMode = o.ZegoRangeAudioMode.World, this.sendMode = o.ZegoRangeAudioMode.World, this.recvRange = null, this.position = null, this.forwardAxis = [1, 0, 0], this.upAxis = [0, 0, 1], this.audioStream = null, this.isPublishing = !1, this.zegoRTC = t, this.audioCtx = e, this.audioListener = this.audioCtx.listener, this.eventHandler = r.default.getInstance(), this.zegoRTC.on("publisherStateUpdate", (function (e) {
                        var t = e.streamID, n = e.state, r = e.errorCode, a = e.extendedData;
                        t === i.userID && ("NO_PUBLISH" === n ? (i.isPublishing = !1, i.stopPublishingStream()) : i.isPublishing = !0);
                        var s = {
                            NO_PUBLISH: o.ZegoRangeAudioMicrophoneState.Off,
                            PUBLISH_REQUESTING: o.ZegoRangeAudioMicrophoneState.TurningOn,
                            PUBLISHING: o.ZegoRangeAudioMicrophoneState.On
                        };
                        i.eventHandler.emit("microphoneStateUpdate", s[n], r, a)
                    }))
                }

                return e.getInstance = function (t, i) {
                    return e.instance || (e.instance = new e(t, i)), e.instance
                }, e.prototype.updateSelfPosition = function (e, t, i) {
                    this.position = e, this.forwardAxis = t, Array.isArray(i) && (this.upAxis = i), this.updateListenerEffect()
                }, e.prototype.updateListenerEffect = function () {
                    this.position && (this.audioListener.positionX ? (this.audioListener.positionX.value = this.position[1], this.audioListener.positionY.value = this.position[2], this.audioListener.positionZ.value = -this.position[0]) : this.audioListener.setPosition(this.position[1], this.position[2], -this.position[0]), this.audioListener.forwardX ? (this.audioListener.forwardX.value = this.forwardAxis[1], this.audioListener.forwardY.value = this.forwardAxis[2], this.audioListener.forwardZ.value = -this.forwardAxis[0], this.audioListener.upX.value = this.upAxis[1], this.audioListener.upY.value = this.upAxis[2], this.audioListener.upZ.value = -this.upAxis[0]) : this.audioListener.setOrientation(this.forwardAxis[1], this.forwardAxis[2], -this.forwardAxis[0], this.upAxis[1], this.upAxis[2], -this.upAxis[0]))
                }, e.prototype.startPublishingStream = function () {
                    var e = this;
                    this.zegoRTC.createStream({camera: {video: !1, audio: !0, audioBitrate: 30}}).then((function (t) {
                        if (!e.userID) throw e.zegoRTC.destroyStream(t), Error("Enable mic failed. Please log in room first.");
                        e.audioStream && e.audioStream !== t && e.zegoRTC.destroyStream(e.audioStream), e.audioStream = t;
                        var i = {range_audio_team_id: e.teamID, range_audio_mode: e.sendMode};
                        e.zegoRTC.startPublishingStream(e.userID, t, {extraInfo: JSON.stringify(i)})
                    })).catch((function (e) {
                        throw e
                    }))
                }, e.prototype.stopPublishingStream = function () {
                    this.isPublishing && this.userID && this.zegoRTC.stopPublishingStream(this.userID), this.isPublishing = !1, this.audioStream && (this.zegoRTC.destroyStream(this.audioStream), this.audioStream = null)
                }, e.prototype.setRecvMode = function (e) {
                    this.recvMode = e
                }, e.prototype.setSendMode = function (e) {
                    this.sendMode = e, this.updateSteamExtraInfo()
                }, e.prototype.setTeamID = function (e) {
                    this.teamID = e, this.updateSteamExtraInfo()
                }, e.prototype.updateSteamExtraInfo = function () {
                    this.userID && this.isPublishing && this.zegoRTC.setStreamExtraInfo(this.userID, JSON.stringify({
                        range_audio_team_id: this.teamID || void 0,
                        range_audio_mode: this.sendMode
                    }))
                }, e.prototype.reset = function () {
                    this.audioStream && this.stopPublishingStream(), this.userID = void 0
                }, e
            }();
            t.default = a
        }, 36: function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            var n = i(5), o = function () {
                function e(e) {
                    this.isEnable = !1, this.interval = 3e3, this.timer = null, this.audioSourceList = [], this.hasChanged = !1, this.maxPlayingQuantity = 20, this.rangeListener = e
                }

                return e.getInstance = function (t) {
                    return e.instance || (e.instance = new e(t)), e.instance
                }, e.prototype.setListener = function (e) {
                    this.rangeListener = e, this.hasChanged = !0
                }, e.prototype.setAudioSourceList = function (e) {
                    this.audioSourceList = e, this.hasChanged = !0
                }, e.prototype.startPlayingAudioStream = function () {
                    this.timer && (clearTimeout(this.timer), this.timer = null), this.playAudioTask()
                }, e.prototype.playAudioTask = function () {
                    var e = this;
                    this.hasChanged && (this.hasChanged = !1, this.handlePlayAudioTask()), this.timer = window.setTimeout((function () {
                        e.playAudioTask()
                    }), this.interval)
                }, e.prototype.handlePlayAudioTask = function () {
                    var e = this;
                    if (this.isEnable) {
                        var t = this.getTeamAudioSourceGroup(), i = t.teamList, o = t.otherList, r = 0;
                        i.forEach((function (t) {
                            r < e.maxPlayingQuantity && (t.isPlaying || t.startPlayingAudio(), r++)
                        }));
                        var a = this.rangeListener.recvMode === n.ZegoRangeAudioMode.World;
                        a && (o.forEach((function (t) {
                            t.distance = t.getDistanceFromListener(e.rangeListener)
                        })), o.sort((function (e, t) {
                            return null === e.distance ? 1 : null === t.distance || e.distance < t.distance ? -1 : e.distance > t.distance ? 1 : 0
                        }))), o.forEach((function (t) {
                            a && r < e.maxPlayingQuantity && t.sendMode !== n.ZegoRangeAudioMode.Team && null !== t.distance && (null === e.rangeListener.recvRange || t.distance <= e.rangeListener.recvRange) ? (t.isPlaying || t.startPlayingAudio(), r++) : t.stopPlayingAudio()
                        }))
                    } else this.stopPlayingAudioStream()
                }, e.prototype.getTeamAudioSourceGroup = function () {
                    var e = this, t = [], i = [];
                    return this.audioSourceList.forEach((function (n) {
                        [n.teamID, e.rangeListener.teamID].includes(void 0) || n.teamID !== e.rangeListener.teamID ? i.push(n) : t.push(n)
                    })), {teamList: t, otherList: i}
                }, e.prototype.stopPlayingAudioStream = function () {
                    this.timer && (clearTimeout(this.timer), this.timer = null), this.audioSourceList.forEach((function (e) {
                        e.stopPlayingAudio()
                    }))
                }, e
            }();
            t.default = o
        }, 37: function (e, t, i) {
            "use strict";

            function n(e) {
                return !isNaN(Number(e)) && Number.MAX_SAFE_INTEGER >= Number(e) && Number(e) >= -Number.MAX_SAFE_INTEGER
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.checkCoordinate = t.checkBoolean = t.checkNumber = void 0, t.checkNumber = n, t.checkBoolean = function (e) {
                return !1
            }, t.checkCoordinate = function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0; t < 3; t++) {
                        if (!n(e[t])) return !1
                    }
                    return !0
                }
                return !1
            }
        }, 5: function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoRangeAudioMode = t.ZegoRangeAudioMicrophoneState = void 0, function (e) {
                e[e.Off = 0] = "Off", e[e.TurningOn = 1] = "TurningOn", e[e.On = 2] = "On"
            }(t.ZegoRangeAudioMicrophoneState || (t.ZegoRangeAudioMicrophoneState = {})), function (e) {
                e[e.World = 0] = "World", e[e.Team = 1] = "Team"
            }(t.ZegoRangeAudioMode || (t.ZegoRangeAudioMode = {}))
        }
    })
}));