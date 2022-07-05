//
//  Url.ts
//
//  Created by David Rowe on 30 Jun 2022.
//  Copyright 2022 Vircadia contributors.
//  Copyright 2022 DigiSomni LLC.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

/*@devdoc
 *  The <code>Url</code> class provides a Qt-style URL facility.
 *  <p>C++: <code>QUrl</code></p>
 *  @class Url
 *  @param {string} [url] - A string representation of a URL.
 */
class Url {
    // C++  Qt's QUrl class.

    #_raw: string | null;  // The raw value that the Url object was constructed with.
    #_url: URL | null;  // The JavaScript URL value if the raw value is a valid URL.


    constructor(url?: string) {
        this.#_raw = url ?? null;
        if (url !== undefined) {
            try {
                this.#_url = new URL(url);
            } catch (e) {
                this.#_url = null;
            }
        } else {
            this.#_url = null;
        }
    }


    /*@devdoc
     *  Gets whether the URL is empty.
     *  @returns {boolean} <code>true</code> if the URL is empty, <code>false</code> if it isn't.
     */
    isEmpty(): boolean {
        // C++  bool QUrl::isEmpty() const
        return this.#_raw === null;
    }

    /*@devdoc
     *  Gets whether the URL is valid.
     *  @returns {boolean} <code>true</code> if the URL is valid, <code>false</code> if it isn't.
     */
    isValid(): boolean {
        // C++  bool QUrl::isValid() const
        return this.#_url !== null;
    }

    /*@devdoc
     *  Gets the scheme (protocol without the trailing ":") of the URL.
     *  @returns {string} The scheme of the URL if valid, <code>""</code> if invalid.
     */
    scheme(): string {
        // C++  QString QUrl::scheme() const
        return this.#_url !== null ? this.#_url.protocol.replace(":", "") : "";
    }

    /*@devdoc
     *  Sets the scheme (protocol without the trailing ":") of the URL, if the URL is valid.
     *  @param {string} scheme - The scheme value to set.
     */
    setScheme(scheme: string): void {
        // C++  void QUrl::setScheme(const QString &scheme)
        if (this.#_url !== null) {
            this.#_url.protocol = scheme + ":";
        } else {
            console.error("[Url] Trying to set scheme on invalid URL.");
        }
    }

    /*@devdoc
     *  Gets the host name of the URL.
     *  @returns {string} The host name in the URL if valid, <code>""</code> if invalid.
     */
    host(): string {
        return this.#_url?.hostname ?? "";
    }

    /*@devdoc
     *  Gets the port of the URL.
     *  @param {number} [defaultPort=-1] - The default port number to return if none specified.
     *  @returns {number} The port in the URL if valid and specified, <code>-1</code> if invalid or not specified.
     */
    port(defaultPort?: number): number {
        const DEFAULT_PORT = -1;
        const urlPort = this.#_url?.port ?? "";
        return urlPort !== "" ? parseInt(urlPort, 10) : defaultPort ?? DEFAULT_PORT;
    }

    /*@devdoc
     *  Gets the path (the part after the host and port, and before any query) of the URL.
     *  @returns {string} The path of the URL if valid, <code>""</code> if invalid.
     */
    path(): string {
        // C++  QString QUrl::path(QUrl::ComponentFormattingOptions options = FullyDecoded) const
        return this.#_url?.pathname ?? "";
    }

    /*@devdoc
     *  Gets the string representation of the URL.
     *  @returns {string} The string representation of the URL.
     */
    toString(): string {
        // C++  QString QUrl::toString(QUrl::FormattingOptions options = FormattingOptions(PrettyDecoded)) const
        return this.#_url?.toString() ?? this.#_raw ?? "";
    }

}

export default Url;
