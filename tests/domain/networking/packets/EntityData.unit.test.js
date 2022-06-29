//
//  EntityData.unit.test.js
//
//  Created by Julien Merzoug on 31 May 2022.
//  Copyright 2022 Vircadia contributors.
//  Copyright 2022 DigiSomni LLC.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

import EntityData from "../../../../src/domain/networking/packets/EntityData";
import Uuid from "../../../../src/domain/shared/Uuid";


describe("EntityData - unit tests", () => {

    /* eslint-disable @typescript-eslint/no-magic-numbers */


    test("Can read one Model Entity in a packet", () => {
        // eslint-disable-next-line max-len
        const bufferHex = "c030005f878ad79fe105001a010000023378da636030666064c85cb6c2caff93d3df6969e6756d5c5ab7041666755d9fff909501462b28fcff67ffffec7f30f86121ffff9f200316f0ff3f324f6d8783bd898afbc18dab2d1cce9e39630bc3ffebc110a4d61e86611609303c58b88a79238b4bd94a758d152c2faf784de8d1b27fdbe671f08c82b1c39a18433b46744b198122288248e663156bb047606450e5c2403e80faa4613f833c5c6c9a337e3da0c0c423c7c090c090515252506ca5af9f9c92a76ba8579659949c989299a8979c9fab5f5aac9baa6ba8ef9458959858a4ef585c9c5a52acef9b9f929a53acef969f9fa29f94595492919258199f9c989daa9f9e5392862aa4979e93843d345818aab96ab92081fac11112ca6032e0b03b03002d4487fd";

        const bufferArray = new Uint8Array(bufferHex.match(/[\da-f]{2}/giu).map(function (hex) {
            return parseInt(hex, 16);
        }));
        const data = new DataView(bufferArray.buffer);

        const info = EntityData.read(data);
        expect(info).toHaveLength(1);
        expect(info[0].entityItemID instanceof Uuid).toBe(true);
        expect(info[0].entityItemID.stringify()).toBe("69a6a83a-4ff2-42fd-9666-377e860a2ada");
        expect(info[0].entityType).toBe(4);
        expect(info[0].createdFromBuffer).toBe(1655451515775649n);
        expect(info[0].lastEdited).toBe(1655451515775649n);
        expect(info[0].updateDelta).toBe(2);
        expect(info[0].simulatedDelta).toBe(2);
        expect(info[0].simOwnerData.byteLength).toBe(17);
        expect(info[0].simOwnerData).toStrictEqual(new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
        expect(info[0].parentID).toBeNull();
        expect(info[0].parentJointIndex).toBe(65535);
        expect(info[0].visible).toBe(false);
        expect(info[0].name).toBeUndefined();
        expect(info[0].locked).toBe(false);
        expect(info[0].userData).toBeUndefined();
        expect(info[0].privateUserData).toBeUndefined();
        expect(info[0].href).toBeUndefined();
        expect(info[0].description).toBeUndefined();

        expect(info[0].position.x).toBeCloseTo(0.752809, 3);
        expect(info[0].position.y).toBeCloseTo(-12.4463, 3);
        expect(info[0].position.z).toBeCloseTo(2.885479, 3);

        expect(info[0].dimensions.x).toBeCloseTo(0.100000, 3);
        expect(info[0].dimensions.y).toBeCloseTo(0.100000, 3);
        expect(info[0].dimensions.z).toBeCloseTo(0.100000, 3);

        expect(info[0].rotation.x).toBeCloseTo(-0.0000152588, 8);
        expect(info[0].rotation.y).toBeCloseTo(-0.0000152588, 8);
        expect(info[0].rotation.z).toBeCloseTo(-0.0000152588, 8);
        expect(info[0].rotation.w).toBeCloseTo(1, 2);

        expect(info[0].registrationPoint.x).toBeCloseTo(0.5, 3);
        expect(info[0].registrationPoint.y).toBeCloseTo(0.5, 3);
        expect(info[0].registrationPoint.z).toBeCloseTo(0.5, 3);

        expect(info[0].created).toBe(1655451515775649n);
        expect(info[0].lastEditedBy instanceof Uuid).toBe(true);
        expect(info[0].lastEditedBy.stringify()).toBe("e0a1aa03-b104-4476-a927-28a804e9d44a");

        expect(info[0].queryAACube.corner.x).toBeCloseTo(0.6662073, 3);
        expect(info[0].queryAACube.corner.y).toBeCloseTo(-12.5329, 3);
        expect(info[0].queryAACube.corner.z).toBeCloseTo(2.7988767, 3);
        expect(info[0].queryAACube.scale).toBeCloseTo(0.173205, 3);

        expect(info[0].canCastShadow).toBe(true);
        expect(info[0].renderLayer).toBe(0);
        expect(info[0].primitiveMode).toBe(0);
        expect(info[0].ignorePickIntersection).toBe(false);

        expect(info[0].renderWithZones).toBeUndefined();
        expect(info[0].billboardMode).toBe(0);

        expect(info[0].grabbable).toBe(false);
        expect(info[0].grabKinematic).toBe(true);
        expect(info[0].grabFollowsController).toBe(true);
        expect(info[0].triggerable).toBe(false);
        expect(info[0].grabEquippable).toBe(false);
        expect(info[0].delegateToParent).toBe(true);

        expect(info[0].equippableLefPositionOffset.x).toBeCloseTo(0, 2);
        expect(info[0].equippableLefPositionOffset.y).toBeCloseTo(0, 2);
        expect(info[0].equippableLefPositionOffset.z).toBeCloseTo(0, 2);

        expect(info[0].equippableLeftRotationOffset.x).toBeCloseTo(-0.0000152588, 8);
        expect(info[0].equippableLeftRotationOffset.y).toBeCloseTo(-0.0000152588, 8);
        expect(info[0].equippableLeftRotationOffset.z).toBeCloseTo(-0.0000152588, 8);
        expect(info[0].equippableLeftRotationOffset.w).toBeCloseTo(1, 2);

        expect(info[0].equippableRightPositionOffset.x).toBeCloseTo(0, 2);
        expect(info[0].equippableRightPositionOffset.y).toBeCloseTo(0, 2);
        expect(info[0].equippableRightPositionOffset.z).toBeCloseTo(0, 2);

        expect(info[0].equippableRightRotationOffset.x).toBeCloseTo(-0.0000152588, 8);
        expect(info[0].equippableRightRotationOffset.y).toBeCloseTo(-0.0000152588, 8);
        expect(info[0].equippableRightRotationOffset.z).toBeCloseTo(-0.0000152588, 8);
        expect(info[0].equippableRightRotationOffset.w).toBeCloseTo(1, 2);

        expect(info[0].equippableIndicatorUrl).toBeUndefined();

        expect(info[0].equippableIndicatorScale.x).toBeCloseTo(1, 2);
        expect(info[0].equippableIndicatorScale.y).toBeCloseTo(1, 2);
        expect(info[0].equippableIndicatorScale.z).toBeCloseTo(1, 2);

        expect(info[0].equippableIndicatorOffset.x).toBeCloseTo(0, 2);
        expect(info[0].equippableIndicatorOffset.y).toBeCloseTo(0, 2);
        expect(info[0].equippableIndicatorOffset.z).toBeCloseTo(0, 2);

        expect(info[0].density).toBeCloseTo(1000, 2);

        expect(info[0].velocity.x).toBeCloseTo(0, 2);
        expect(info[0].velocity.y).toBeCloseTo(0, 2);
        expect(info[0].velocity.z).toBeCloseTo(0, 2);

        expect(info[0].angularVelocity.x).toBeCloseTo(0, 2);
        expect(info[0].angularVelocity.y).toBeCloseTo(0, 2);
        expect(info[0].angularVelocity.z).toBeCloseTo(0, 2);

        expect(info[0].gravity.x).toBeCloseTo(0, 2);
        expect(info[0].gravity.y).toBeCloseTo(0, 2);
        expect(info[0].gravity.z).toBeCloseTo(0, 2);

        expect(info[0].acceleration.x).toBeCloseTo(0, 2);
        expect(info[0].acceleration.y).toBeCloseTo(0, 2);
        expect(info[0].acceleration.z).toBeCloseTo(0, 2);

        expect(info[0].damping).toBeCloseTo(0, 2);
        expect(info[0].angularDampling).toBeCloseTo(0, 2);
        expect(info[0].restitution).toBeCloseTo(0.5, 3);
        expect(info[0].friction).toBeCloseTo(0.5, 3);
        expect(info[0].lifetime).toBeCloseTo(-1, 2);

        expect(info[0].collisionless).toBe(false);
        expect(info[0].collisionMask).toBe(31);
        expect(info[0].dynamic).toBe(false);
        expect(info[0].collisionSoundUrl).toBeUndefined();

        expect(info[0].actionData).toBeUndefined();

        expect(info[0].cloneable).toBe(false);
        expect(info[0].cloneLifetime).toBeCloseTo(300, 2);
        expect(info[0].cloneLimit).toBeCloseTo(0, 2);
        expect(info[0].cloneDynamic).toBe(false);
        expect(info[0].cloneAvatarIdentity).toBe(false);

        expect(info[0].cloneOriginId).toBeUndefined();
        expect(info[0].script).toBeUndefined();
        expect(info[0].scriptTimestamp).toBe(0n);
        expect(info[0].serverScripts).toBeUndefined();
        expect(info[0].itemName).toBeUndefined();
        expect(info[0].itemDescription).toBeUndefined();
        expect(info[0].itemCategories).toBeUndefined();
        expect(info[0].itemArtist).toBeUndefined();
        expect(info[0].itemLicense).toBeUndefined();

        expect(info[0].limitedRun).toBe(4294967295);

        expect(info[0].marketplaceID).toBeUndefined();

        expect(info[0].editionNumber).toBe(0);
        expect(info[0].entityInstanceNumber).toBe(0);
        expect(info[0].certificateID).toBeUndefined();
        expect(info[0].certificateType).toBeUndefined();
        expect(info[0].staticCertificateVersion).toBe(0);

        expect(info[0].shapeType).toBe(0);
        expect(info[0].compoundShapeUrl).toBeUndefined();

        expect(info[0].color.x).toBe(255);
        expect(info[0].color.y).toBe(255);
        expect(info[0].color.z).toBe(255);

        expect(info[0].textures).toBeUndefined();

        expect(info[0].modelUrl).toBe(
            "https://cdn-1.vircadia.com/us-e-1/Bazaar/Assets/Models/Food/birthday_cake/gltf/birthday_cake.glb"
        );

        expect(info[0].modelScale.x).toBeCloseTo(1, 2);
        expect(info[0].modelScale.y).toBeCloseTo(1, 2);
        expect(info[0].modelScale.z).toBeCloseTo(1, 2);

        expect(info[0].jointRotationsSet).toBeUndefined();
        expect(info[0].jointRotations).toBeUndefined();
        expect(info[0].jointTranslationsSet).toBeUndefined();
        expect(info[0].jointTranslations).toBeUndefined();

        expect(info[0].relayParentJoints).toBe(false);
        expect(info[0].groupCulled).toBe(false);

        expect(info[0].blendShapeCoefficients).toBe("{\n}\n");

        expect(info[0].useOriginalPivot).toBe(true);
        expect(info[0].animationUrl).toBeUndefined();
        expect(info[0].animationAllowTranslation).toBe(false);
        expect(info[0].animationFPS).toBeCloseTo(30, 2);
        expect(info[0].animationFrameIndex).toBeCloseTo(0, 2);

        expect(info[0].animationPlaying).toBe(false);
        expect(info[0].animationLoop).toBe(true);

        expect(info[0].animationFirstFrame).toBeCloseTo(0, 2);
        expect(info[0].animationLastFrame).toBeCloseTo(100000, 2);

        expect(info[0].animationHold).toBe(false);
    });

    test("Can read two Model entities in a packet", () => {
        // eslint-disable-next-line max-len
        const bufferHex = "c001009ea50eda06e205005b010000036978da636050666062300eb0689394727c3225e04358aa439fbac09b844307d81eb1329cfb7f184c3330fcffc700023cafffffff61210fe56107f610dcb05f1e2632cd99012ff80f0478e418181218324a4a0a8aadf4f59353f2740df5ca328b9213533213f592f373f54b8b7553750df59d12ab12138bf41d8b8b534b8af57df35352738af5ddf2f353f493328b4a3252122be39313b353f5d3734ad25085f4d2739280eeb54760186061a8e6aae56204b33f3882290827e0b03b839eda2b8b83af3d16b708ec7bb87a65c40301979f61bb40a1953d2362172cd4ecff9ffd0f06e05013c4ee4346249ec88225fbd59c980f7c7052de7fe8fa363ba6a7c2769b666fb3fb5f0f86ff1101cc600fb35080c1f3e0aca34f845d2b1b5e2ce89ce2729ad1c4f2d8fe6d7c22070c4ad3f6d7a7b0d933a25bcac808f30acc1508f3b18a610b1e10a87261201fc0930a033cad0cd3c40200c4f1cf28";

        const bufferArray = new Uint8Array(bufferHex.match(/[\da-f]{2}/giu).map(function (hex) {
            return parseInt(hex, 16);
        }));
        const data = new DataView(bufferArray.buffer);

        const info = EntityData.read(data);
        expect(info).toHaveLength(2);

        // First Model Entity.
        expect(info[0].entityItemID instanceof Uuid).toBe(true);
        expect(info[0].entityItemID.stringify()).toBe("33503886-191a-41e4-9450-f05665408e27");
        expect(info[0].entityType).toBe(4);
        expect(info[0].createdFromBuffer).toBe(1655893515198700n);
        expect(info[0].lastEdited).toBe(1655893515304910n);
        expect(info[0].updateDelta).toBe(0);
        expect(info[0].simulatedDelta).toBe(0);
        expect(info[0].simOwnerData).toBeUndefined();
        expect(info[0].parentID).toBeUndefined();
        expect(info[0].parentJointIndex).toBeUndefined();
        expect(info[0].visible).toBeUndefined();
        expect(info[0].name).toBeUndefined();
        expect(info[0].locked).toBe(false);
        expect(info[0].userData).toBeUndefined();
        expect(info[0].privateUserData).toBeUndefined();
        expect(info[0].href).toBeUndefined();
        expect(info[0].description).toBeUndefined();
        expect(info[0].position).toBeUndefined();
        expect(info[0].dimensions).toBeUndefined();
        expect(info[0].rotation).toBeUndefined();
        expect(info[0].registrationPoint).toBeUndefined();
        expect(info[0].created).toBeUndefined();
        expect(info[0].lastEditedBy).toBeUndefined();
        expect(info[0].queryAACube).toBeUndefined();
        expect(info[0].canCastShadow).toBeUndefined();
        expect(info[0].renderLayer).toBeUndefined();
        expect(info[0].primitiveMode).toBeUndefined();
        expect(info[0].ignorePickIntersection).toBeUndefined();
        expect(info[0].renderWithZones).toBeUndefined();
        expect(info[0].billboardMode).toBeUndefined();
        expect(info[0].grabbable).toBeUndefined();
        expect(info[0].grabKinematic).toBeUndefined();
        expect(info[0].grabFollowsController).toBeUndefined();
        expect(info[0].triggerable).toBeUndefined();
        expect(info[0].grabEquippable).toBeUndefined();
        expect(info[0].delegateToParent).toBeUndefined();
        expect(info[0].equippableLefPositionOffset).toBeUndefined();
        expect(info[0].equippableLeftRotationOffset).toBeUndefined();
        expect(info[0].equippableRightPositionOffset).toBeUndefined();
        expect(info[0].equippableRightRotationOffset).toBeUndefined();
        expect(info[0].equippableIndicatorUrl).toBeUndefined();
        expect(info[0].equippableIndicatorScale).toBeUndefined();
        expect(info[0].equippableIndicatorOffset).toBeUndefined();
        expect(info[0].density).toBeUndefined();
        expect(info[0].velocity).toBeUndefined();
        expect(info[0].angularVelocity).toBeUndefined();
        expect(info[0].gravity.x).toBeCloseTo(0, 2);
        expect(info[0].gravity.y).toBeCloseTo(0, 2);
        expect(info[0].gravity.z).toBeCloseTo(0, 2);
        expect(info[0].acceleration.x).toBeCloseTo(0, 2);
        expect(info[0].acceleration.y).toBeCloseTo(0, 2);
        expect(info[0].acceleration.z).toBeCloseTo(0, 2);
        expect(info[0].damping).toBeUndefined();
        expect(info[0].angularDampling).toBeUndefined();
        expect(info[0].restitution).toBeCloseTo(0.5, 3);
        expect(info[0].friction).toBeCloseTo(0.5, 3);
        expect(info[0].lifetime).toBeCloseTo(-1, 2);
        expect(info[0].collisionless).toBeUndefined();
        expect(info[0].collisionMask).toBe(31);
        expect(info[0].dynamic).toBeUndefined();
        expect(info[0].collisionSoundUrl).toBeUndefined();
        expect(info[0].actionData).toBeUndefined();
        expect(info[0].cloneable).toBe(false);
        expect(info[0].cloneLifetime).toBeCloseTo(300, 2);
        expect(info[0].cloneLimit).toBeCloseTo(0, 2);
        expect(info[0].cloneDynamic).toBe(false);
        expect(info[0].cloneAvatarIdentity).toBe(false);
        expect(info[0].cloneOriginId).toBeUndefined();
        expect(info[0].script).toBeUndefined();
        expect(info[0].scriptTimestamp).toBe(0n);
        expect(info[0].serverScripts).toBeUndefined();
        expect(info[0].itemName).toBeUndefined();
        expect(info[0].itemDescription).toBeUndefined();
        expect(info[0].itemCategories).toBeUndefined();
        expect(info[0].itemArtist).toBeUndefined();
        expect(info[0].itemLicense).toBeUndefined();
        expect(info[0].limitedRun).toBe(4294967295);
        expect(info[0].marketplaceID).toBeUndefined();
        expect(info[0].editionNumber).toBe(0);
        expect(info[0].entityInstanceNumber).toBe(0);
        expect(info[0].certificateID).toBeUndefined();
        expect(info[0].certificateType).toBeUndefined();
        expect(info[0].staticCertificateVersion).toBe(0);
        expect(info[0].shapeType).toBe(0);
        expect(info[0].compoundShapeUrl).toBeUndefined();
        expect(info[0].color.x).toBe(255);
        expect(info[0].color.y).toBe(255);
        expect(info[0].color.z).toBe(255);
        expect(info[0].textures).toBeUndefined();
        expect(info[0].modelUrl).toBe(
            "https://cdn-1.vircadia.com/us-e-1/Bazaar/Assets/Models/Food/birthday_cake/gltf/birthday_cake.glb"
        );
        expect(info[0].modelScale.x).toBeCloseTo(1, 2);
        expect(info[0].modelScale.y).toBeCloseTo(1, 2);
        expect(info[0].modelScale.z).toBeCloseTo(1, 2);
        expect(info[0].jointRotationsSet).toBeUndefined();
        expect(info[0].jointRotations).toBeUndefined();
        expect(info[0].jointTranslationsSet).toBeUndefined();
        expect(info[0].jointTranslations).toBeUndefined();
        expect(info[0].relayParentJoints).toBe(false);
        expect(info[0].groupCulled).toBe(false);
        expect(info[0].blendShapeCoefficients).toBe("{\n}\n");
        expect(info[0].useOriginalPivot).toBe(true);
        expect(info[0].animationUrl).toBeUndefined();
        expect(info[0].animationAllowTranslation).toBe(false);
        expect(info[0].animationFPS).toBeCloseTo(30, 2);
        expect(info[0].animationFrameIndex).toBeCloseTo(0, 2);
        expect(info[0].animationPlaying).toBe(false);
        expect(info[0].animationLoop).toBe(true);
        expect(info[0].animationFirstFrame).toBeCloseTo(0, 2);
        expect(info[0].animationLastFrame).toBeCloseTo(100000, 2);
        expect(info[0].animationHold).toBe(false);

        // Second Model Entity.
        expect(info[1].entityItemID instanceof Uuid).toBe(true);
        expect(info[1].entityItemID.stringify().toString()).toBe("2e26ea38-c1eb-48a3-8410-bee1aba958e0");
        expect(info[1].entityType).toBe(4);
        expect(info[1].createdFromBuffer).toBe(1655893407496516n);
        expect(info[1].lastEdited).toBe(1655893407602795n);
        expect(info[1].updateDelta).toBe(0);
        expect(info[1].simulatedDelta).toBe(0);
        expect(info[1].simOwnerData.byteLength).toBe(17);
        expect(info[1].simOwnerData).toStrictEqual(new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
        expect(info[1].parentID).toBeNull();
        expect(info[1].parentJointIndex).toBe(65535);
        expect(info[1].visible).toBe(true);
        expect(info[1].name).toBeUndefined();
        expect(info[1].locked).toBe(false);
        expect(info[1].userData).toBeUndefined();
        expect(info[1].privateUserData).toBeUndefined();
        expect(info[1].href).toBeUndefined();
        expect(info[1].description).toBeUndefined();
        expect(info[1].position.x).toBeCloseTo(-1.28613, 4);
        expect(info[1].position.y).toBeCloseTo(-2.05091, 4);
        expect(info[1].position.z).toBeCloseTo(-0.63774, 4);
        expect(info[1].dimensions.x).toBeCloseTo(0.357114, 4);
        expect(info[1].dimensions.y).toBeCloseTo(0.144428, 3);
        expect(info[1].dimensions.z).toBeCloseTo(0.356657, 3);
        expect(info[1].rotation.x).toBeCloseTo(-0.0000152588, 8);
        expect(info[1].rotation.y).toBeCloseTo(-0.0000152588, 8);
        expect(info[1].rotation.z).toBeCloseTo(-0.0000152588, 8);
        expect(info[1].rotation.w).toBeCloseTo(1, 2);
        expect(info[1].registrationPoint.x).toBeCloseTo(0.5, 3);
        expect(info[1].registrationPoint.y).toBeCloseTo(0.5, 3);
        expect(info[1].registrationPoint.z).toBeCloseTo(0.5, 3);
        expect(info[1].created).toBe(1655893407496516n);
        expect(info[1].lastEditedBy instanceof Uuid).toBe(true);
        expect(info[1].lastEditedBy.stringify()).toBe("49c19ac5-e413-4579-80e8-a0899444cb01");
        expect(info[1].queryAACube.corner.x).toBeCloseTo(-1.548620, 3);
        expect(info[1].queryAACube.corner.y).toBeCloseTo(-2.31339, 3);
        expect(info[1].queryAACube.corner.z).toBeCloseTo(-0.900225, 3);
        expect(info[1].queryAACube.scale).toBeCloseTo(0.524970, 3);
        expect(info[1].canCastShadow).toBe(true);
        expect(info[1].renderLayer).toBe(0);
        expect(info[1].primitiveMode).toBe(0);
        expect(info[1].ignorePickIntersection).toBe(false);
        expect(info[1].renderWithZones).toBeUndefined();
        expect(info[1].billboardMode).toBe(0);
        expect(info[1].grabbable).toBe(false);
        expect(info[1].grabKinematic).toBe(true);
        expect(info[1].grabFollowsController).toBe(true);
        expect(info[1].triggerable).toBe(false);
        expect(info[1].grabEquippable).toBe(false);
        expect(info[1].delegateToParent).toBe(true);
        expect(info[1].equippableLefPositionOffset.x).toBeCloseTo(0, 2);
        expect(info[1].equippableLefPositionOffset.y).toBeCloseTo(0, 2);
        expect(info[1].equippableLefPositionOffset.z).toBeCloseTo(0, 2);
        expect(info[1].equippableLeftRotationOffset.x).toBeCloseTo(-0.0000152588, 8);
        expect(info[1].equippableLeftRotationOffset.y).toBeCloseTo(-0.0000152588, 8);
        expect(info[1].equippableLeftRotationOffset.z).toBeCloseTo(-0.0000152588, 8);
        expect(info[1].equippableLeftRotationOffset.w).toBeCloseTo(1, 2);
        expect(info[1].equippableRightPositionOffset.x).toBeCloseTo(0, 2);
        expect(info[1].equippableRightPositionOffset.y).toBeCloseTo(0, 2);
        expect(info[1].equippableRightPositionOffset.z).toBeCloseTo(0, 2);
        expect(info[1].equippableRightRotationOffset.x).toBeCloseTo(-0.0000152588, 8);
        expect(info[1].equippableRightRotationOffset.y).toBeCloseTo(-0.0000152588, 8);
        expect(info[1].equippableRightRotationOffset.z).toBeCloseTo(-0.0000152588, 8);
        expect(info[1].equippableRightRotationOffset.w).toBeCloseTo(1, 2);
        expect(info[1].equippableIndicatorUrl).toBeUndefined();
        expect(info[1].equippableIndicatorScale.x).toBeCloseTo(1, 2);
        expect(info[1].equippableIndicatorScale.y).toBeCloseTo(1, 2);
        expect(info[1].equippableIndicatorScale.z).toBeCloseTo(1, 2);
        expect(info[1].equippableIndicatorOffset.x).toBeCloseTo(0, 2);
        expect(info[1].equippableIndicatorOffset.y).toBeCloseTo(0, 2);
        expect(info[1].equippableIndicatorOffset.z).toBeCloseTo(0, 2);
        expect(info[1].density).toBeCloseTo(1000, 2);
        expect(info[1].velocity.x).toBeCloseTo(0, 2);
        expect(info[1].velocity.y).toBeCloseTo(0, 2);
        expect(info[1].velocity.z).toBeCloseTo(0, 2);
        expect(info[1].angularVelocity.x).toBeCloseTo(0, 2);
        expect(info[1].angularVelocity.y).toBeCloseTo(0, 2);
        expect(info[1].angularVelocity.z).toBeCloseTo(0, 2);
        expect(info[1].gravity.x).toBeCloseTo(0, 2);
        expect(info[1].gravity.y).toBeCloseTo(0, 2);
        expect(info[1].gravity.z).toBeCloseTo(0, 2);
        expect(info[1].acceleration.x).toBeCloseTo(0, 2);
        expect(info[1].acceleration.y).toBeCloseTo(0, 2);
        expect(info[1].acceleration.z).toBeCloseTo(0, 2);
        expect(info[1].damping).toBeCloseTo(0, 2);
        expect(info[1].angularDampling).toBeCloseTo(0, 2);
        expect(info[1].restitution).toBeCloseTo(0.5, 3);
        expect(info[1].friction).toBeCloseTo(0.5, 3);
        expect(info[1].lifetime).toBeCloseTo(-1, 2);
        expect(info[1].collisionless).toBe(false);
        expect(info[1].collisionMask).toBe(31);
        expect(info[1].dynamic).toBe(false);
        expect(info[1].collisionSoundUrl).toBeUndefined();
        expect(info[1].actionData).toBeUndefined();
        expect(info[1].cloneable).toBe(false);
        expect(info[1].cloneLifetime).toBeCloseTo(300, 2);
        expect(info[1].cloneLimit).toBeCloseTo(0, 2);
        expect(info[1].cloneDynamic).toBe(false);
        expect(info[1].cloneAvatarIdentity).toBe(false);
        expect(info[1].cloneOriginId).toBeUndefined();
        expect(info[1].script).toBeUndefined();
        expect(info[1].scriptTimestamp).toBe(0n);
        expect(info[1].serverScripts).toBeUndefined();
        expect(info[1].itemName).toBeUndefined();
        expect(info[1].itemDescription).toBeUndefined();
        expect(info[1].itemCategories).toBeUndefined();
        expect(info[1].itemArtist).toBeUndefined();
        expect(info[1].itemLicense).toBeUndefined();
        expect(info[1].limitedRun).toBe(4294967295);
        expect(info[1].marketplaceID).toBeUndefined();
        expect(info[1].editionNumber).toBe(0);
        expect(info[1].entityInstanceNumber).toBe(0);
        expect(info[1].certificateID).toBeUndefined();
        expect(info[1].certificateType).toBeUndefined();
        expect(info[1].staticCertificateVersion).toBe(0);
        expect(info[1].shapeType).toBe(0);
        expect(info[1].compoundShapeUrl).toBeUndefined();
        expect(info[1].color.x).toBe(255);
        expect(info[1].color.y).toBe(255);
        expect(info[1].color.z).toBe(255);
        expect(info[1].textures).toBeUndefined();
        expect(info[1].modelUrl).toBe(
            "https://cdn-1.vircadia.com/us-e-1/Bazaar/Assets/Models/Food/birthday_cake/gltf/birthday_cake.glb"
        );
        expect(info[1].modelScale.x).toBeCloseTo(1, 2);
        expect(info[1].modelScale.y).toBeCloseTo(1, 2);
        expect(info[1].modelScale.z).toBeCloseTo(1, 2);
        expect(info[1].jointRotationsSet).toBeUndefined();
        expect(info[1].jointRotations).toBeUndefined();
        expect(info[1].jointTranslationsSet).toBeUndefined();
        expect(info[1].jointTranslations).toBeUndefined();
        expect(info[1].relayParentJoints).toBe(false);
        expect(info[1].groupCulled).toBe(false);
        expect(info[1].blendShapeCoefficients).toBe("{\n}\n");
        expect(info[1].useOriginalPivot).toBe(true);
        expect(info[1].animationUrl).toBeUndefined();
        expect(info[1].animationAllowTranslation).toBe(false);
        expect(info[1].animationFPS).toBeCloseTo(30, 2);
        expect(info[1].animationFrameIndex).toBeCloseTo(0, 2);
        expect(info[1].animationPlaying).toBe(false);
        expect(info[1].animationLoop).toBe(true);
        expect(info[1].animationFirstFrame).toBeCloseTo(0, 2);
        expect(info[1].animationLastFrame).toBeCloseTo(100000, 2);
        expect(info[1].animationHold).toBe(false);
    });

});
