import axios from "axios";

export default function kassette(pluginConfig = {})  {

  let initialized = false;
  let client = null;
  return {
      name: "kassette",
      config: pluginConfig,
      initialize: ({config}) => {

          const {sourceId, endpoint} = config;
          console.log('Kassette initialized')

        if (!sourceId) {
          throw new Error("Kassette project sourceId is not defined");
        }

        if (!endpoint) {
          throw new Error("Kassette project EndPoint is not defined");
        }

        initialized = true;

      },
      page: function page(_ref2) {

        var _ref2$payload = _ref2.payload,
            properties = _ref2$payload.properties,
            options = _ref2$payload.options;
        var eventType = "Page View";


        if (options && options.eventType) {
          eventType = options.eventType;
        }

        this.sendMetric(eventType, properties);
      },
      track: function track(_ref3) {
        var _ref3$payload = _ref3.payload,
            event = _ref3$payload.event,
            properties = _ref3$payload.properties;
        // client.sendMetric(event, properties);
      },
      identify: function identify(_ref4) {

        var _ref4$payload = _ref4.payload,
            userId = _ref4$payload.userId,
            traits = _ref4$payload.traits;
            _ref4.instance;
        setUserId(userId)
        client.setUserProperties(traits);
      },
      loaded: function loaded() {
        return true;
      },
      sendMetric: function sendMetric(type, _ref5) {

        const payload = {
            type: type,
            sourceId: this.config.sourceId,
            props: _ref5
        };
        if(process.client) {
          payload.userId = localStorage.getItem('kassette_user_id');
          payload.userTraits = JSON.parse(localStorage.getItem('kassette_user_properties'));
        }
        axios.post(this.config.endpoint, JSON.stringify(payload))
        },
      // https://getanalytics.io/plugins/writing-plugins/#adding-custom-methods
      methods: {
        /**
         * analytics.plugins['kassette'].setSessionId('your-id')
         */
        setUserId: setUserId
      }
    };

  /**
   * @param {string} sessionId - Minimum visit length before first page ping event fires
   */
  function setUserId(userId) {
      this.$auth.$storage.setCookie("userId", userId, true)
  }

  /* This module will shake out unused code + work in browser and node 🎉 */
  var index = kassettePlugin ;
  return index;
};
