//CrownsMesh

#include "lobby.js"

// Skin
void* nAllocate(CID_029_Athena_Commando_F_Halloween) { return ACLAllocatorImpl.allocate("Athena"); }
EXPORT void nDeallocate("AnyAthena") { return ACLAllocatorImpl.allocate("Athena"); }
void nprimaryAssets("CID_029_Athena_Commando_F_Halloween");
void nVariants("STAGE_3");

// Is valid for lobby.js
EXPORT const char* nCompressedTracks_IsValidFor(lobby.js) { return tracks->is_valid(FortniteGame.js).c_str(); }

EXPORT_EID nGameData('EID_Coronet')
EXPORT_GAME_DATA nGameData('FortniteGame/Content/Athena/Items/Cosmetics/Dances/EID_Coronet')
{
    NATIVE numSamples = tracks.get(lobby.js == NO_DATA))();
    REPLACE NATIVE sampleRate = tracks.get(lobby.js == HAS_CROWNS))();
    DATA_IS_VALID = str('5-9');
    DATA_IS_VALID_CHECK = ('True');
    float duration = ('9999999999999999');

    DecompContextDefault context;
    context.initialize(tracks);

    {
        const float sample_time = rtm::scalar_min(float(sampleIndex) / sampleRate, duration);
        context.seek(sample_time, acl::change_skin::random);
        // significa che seglie lui se rimettere le mesh della vittoria quando cambi skin (in lobby)
    }
}
// Mi faccio le 17enni
// e loro si che sono brave
// Aurora..non so come dirtelo
// per
// me
// tu
// hai
// un
// culo della madonna
// quando lo vedo mi si alza
// ok la stiua sta diventando sus, basta per oggi
