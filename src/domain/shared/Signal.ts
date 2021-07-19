//
//  Signal.ts
//
//  Created by David Rowe on 6 Jun 2021.
//  Copyright 2021 Vircadia contributors.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

import assert from "./assert";

/*@devdoc
 *  A function that can be connected to a {@link Signal}. Typically, <code>this</code> should be bound to it in the constructor
 *  of the class that implements the function.
 *  @typedef Slot
 *  @param {any} ...args - Any arguments included in the <code>Signal</code> are passed through to the <code>Slot</code>
 *      function.
 */
type Slot = (...args: any[]) => void; // eslint-disable-line @typescript-eslint/no-explicit-any


/*@devdoc
 *  Emulates Qt's signals and slots mechanism. In particular, a <code>Signal</code> object is implemented which can be connected
 *  to one or more "slot"<code>Slot</slot> functions, "emitted" to asynchronously call those functions, and disconnected.
 *  <p>C++: Qt's signals and slots mechanism.</p>
 *
 *  @class Signal
 */
class Signal {

    private _slots: Set<Slot> = new Set();

    /*@devdoc
     *  Connects the signal to a <code>Slot</slot> function.
     *  <p>Note: If the slot function uses <code>this</code> then the correct <code>this</code> must be bound to it, e.g., by
     *  applying <code>.bind(this)</code> in the constructor of the class that implements the slot function.</p>
     *  @param {Slot} slot - Function to be called when <code>emit</code> is called.
     */
    connect(slot: Slot): void {
        assert(typeof slot === "function");
        this._slots.add(slot);
    }

    /*@devdoc
     *  Disconnects the signal from a <code>Slot</slot> function.
     *  @param {Slot} slot - Slot function to no longer be called when <code>emit</code> is called.
     */
    disconnect(slot: Slot): void {
        assert(typeof slot === "function");
        this._slots.delete(slot);  // eslint-disable-line @typescript-eslint/dot-notation
    }

    /*@devdoc
     *  "Emits the signal": asynchronously calls all connected <code>Slot</slot> functions.
     *  @param {any} [params] - Parameter values to call connected slot functions with.
     */
    emit(...params: any[]): void {  // eslint-disable-line @typescript-eslint/no-explicit-any
        this._slots.forEach((slot) => {
            setTimeout(slot, 0, ...params);
        });
    }

}

export default Signal;
