(function () {
  const x = Function('return this')(); if (!x.fest)x.fest = {}; x.fest['components/Profile/Profile.tmpl'] = function (__fest_context) {
    const __fest_self = this; let __fest_buf = ''; const __fest_chunks = []; let __fest_chunk; const __fest_attrs = []; let __fest_select; let __fest_if; let __fest_iterator; let __fest_to; let __fest_fn; let __fest_html = ''; const __fest_blocks = {}; let __fest_params; let __fest_element; const __fest_debug_file = ''; const __fest_debug_line = ''; const __fest_debug_block = ''; const __fest_element_stack = []; const __fest_short_tags = {
      area: true, base: true, br: true, col: true, command: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, wbr: true,
    }; const __fest_jschars = /[\\'"\/\n\r\t\b\f<>]/g; const __fest_jschars_test = /[\\'"\/\n\r\t\b\f<>]/; const __fest_htmlchars = /[&<>"]/g; const __fest_htmlchars_test = /[&<>"]/; const __fest_jshash = {
      '"': '\\"', '\\': '\\\\', '/': '\\/', '\n': '\\n', '\r': '\\r', '\t': '\\t', '\b': '\\b', '\f': '\\f', "'": "\\'", '<': '\\u003C', '>': '\\u003E',
    }; const __fest_htmlhash = {
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;',
    }; const __fest_escapeJS = function __fest_escapeJS(value) {
      if (typeof value === 'string') {
        if (__fest_jschars_test.test(value)) {
          return value.replace(__fest_jschars, __fest_replaceJS);
        }
      }

      return value == null ? '' : value;
    }; var __fest_replaceJS = function __fest_replaceJS(chr) {
      return __fest_jshash[chr];
    }; const __fest_escapeHTML = function __fest_escapeHTML(value) {
      if (typeof value === 'string') {
        if (__fest_htmlchars_test.test(value)) {
          return value.replace(__fest_htmlchars, __fest_replaceHTML);
        }
      }

      return value == null ? '' : value;
    }; var __fest_replaceHTML = function __fest_replaceHTML(chr) {
      return __fest_htmlhash[chr];
    }; const __fest_extend = function __fest_extend(dest, src) {
      for (const key in src) {
        if (src.hasOwnProperty(key)) {
          dest[key] = src[key];
        }
      }
    }; const __fest_param = function __fest_param(fn) {
      fn.param = true;
      return fn;
    }; const i18n = __fest_self && typeof __fest_self.i18n === 'function' ? __fest_self.i18n : function (str) { return str; }; let ___fest_log_error; if (typeof __fest_error === 'undefined') { ___fest_log_error = (typeof console !== 'undefined' && console.error) ? function () { return Function.prototype.apply.call(console.error, console, arguments); } : function () {}; } else { ___fest_log_error = __fest_error; } function __fest_log_error(msg) { ___fest_log_error(`${msg}\nin block "${__fest_debug_block}" at line: ${__fest_debug_line}\nfile: ${__fest_debug_file}`); } function __fest_call(fn, params, cp) { if (cp) for (const i in params) if (typeof params[i] === 'function' && params[i].param)params[i] = params[i](); return fn.call(__fest_self, params); } const data = __fest_context; __fest_buf += ('<div class="header"><div class="header__home"><img src="\/images\/home.svg" class="js-header__home-button"/></div><div class="header__logo"><h1 class="header__title">Penguins Wars</h1></div></div><section class="profile-content"><p class="profile__header">Профиль игрока</p><form class="profile-form" enctype="multipart\/form-data"><div class="profile-form__inline">'); try { __fest_attrs[0] = __fest_escapeHTML(data.avatarUrl); } catch (e) { __fest_attrs[0] = ''; __fest_log_error(e.message); }__fest_buf += (`<img class="profile-form__avatar" src="${__fest_attrs[0]}"/><div class="profile-form__data"><div class="profile-form__item"><label>Логин:</label>`); try { __fest_attrs[0] = __fest_escapeHTML(data.login); } catch (e) { __fest_attrs[0] = ''; __fest_log_error(e.message); }__fest_buf += (`<input name="login" type="text" value="${__fest_attrs[0]}" class="profile-form__input"/></div><div class="profile-form__item"><label>Email:</label>`); try { __fest_attrs[0] = __fest_escapeHTML(data.email); } catch (e) { __fest_attrs[0] = ''; __fest_log_error(e.message); }__fest_buf += (`<input name="email" type="email" value="${__fest_attrs[0]}" class="profile-form__input"/></div><input name="inputAvatar" type="file" accept="image\/*" class="profile-form__input-file"/><input name="save" type="submit" value="Сохранить" class="profile-form__submit js-button-save"/></div></div><div class="profile-form__info-block"><div class="info-block__item"><label>Лучший результат:</label>`); try { __fest_attrs[0] = __fest_escapeHTML(data.score); } catch (e) { __fest_attrs[0] = ''; __fest_log_error(e.message); }__fest_buf += (`<input name="score" type="text" value="${__fest_attrs[0]}" class="profile-form__label" disabled="true"/></div><div class="info-block__item"><label>Количество игр:</label>`); try { __fest_attrs[0] = __fest_escapeHTML(data.count); } catch (e) { __fest_attrs[0] = ''; __fest_log_error(e.message); }__fest_buf += (`<input name="score" type="text" value="${__fest_attrs[0]}" class="profile-form__label" disabled="true"/></div></div></form></section>`); __fest_to = __fest_chunks.length; if (__fest_to) { __fest_iterator = 0; for (;__fest_iterator < __fest_to; __fest_iterator++) { __fest_chunk = __fest_chunks[__fest_iterator]; if (typeof __fest_chunk === 'string') { __fest_html += __fest_chunk; } else { __fest_fn = __fest_blocks[__fest_chunk.name]; if (__fest_fn) __fest_html += __fest_call(__fest_fn, __fest_chunk.params, __fest_chunk.cp); } } return __fest_html + __fest_buf; } return __fest_buf;
  };
}());
